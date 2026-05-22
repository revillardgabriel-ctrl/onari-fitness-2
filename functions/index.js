const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

// Secrets stockés dans Firebase Secret Manager
const GEMINI_SECRET  = defineSecret("GEMINI_API_KEY");
const STRIPE_SECRET  = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK = defineSecret("STRIPE_WEBHOOK_SECRET");

// ── Price IDs Stripe ────────────────────────────────────────────────────────
const PRICES = {
  premium_monthly: "price_1TSL5KF91Oad2l1YtLPgWZ9u",
  premium_annual:  "price_1TSL5MF91Oad2l1YfzwfAUF9",
  elite_monthly:   "price_1TSL5OF91Oad2l1YPVxg1qMr",
  elite_annual:    "price_1TSL5MF91Oad2l1Y4judse4b",
};
const PREMIUM_PRICES = [PRICES.premium_monthly, PRICES.premium_annual];
const ELITE_PRICES   = [PRICES.elite_monthly,   PRICES.elite_annual];

const CORS = ["https://onari-fitness.web.app", "https://onari-fitness.firebaseapp.com"];

/**
 * Proxy Gemini AI — appelé par le front via fetch("/api/ai")
 * Le front envoie : { model, contents, generationConfig, systemInstruction }
 * L'utilisateur doit être authentifié Firebase (on vérifie le token)
 */
exports.ai = onRequest(
  { secrets: [GEMINI_SECRET], cors: ["https://onari-fitness.web.app", "https://onari-fitness.firebaseapp.com"] },
  async (req, res) => {
    // Méthode
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Vérification auth Firebase (token dans Authorization header)
    const authHeader = req.headers.authorization || "";
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Non autorisé" });
    }
    try {
      const { getAuth } = require("firebase-admin/auth");
      await getAuth().verifyIdToken(authHeader.split("Bearer ")[1]);
    } catch (e) {
      return res.status(401).json({ error: "Token invalide" });
    }

    // Corps de la requête
    const { model = "gemini-2.5-flash", contents, generationConfig, systemInstruction } = req.body;
    if (!contents) return res.status(400).json({ error: "Champs manquants" });

    // Appel Gemini avec la clé secrète (jamais exposée au front)
    const key = GEMINI_SECRET.value();
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    try {
      const fetch = (await import("node-fetch")).default;
      const geminiRes = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents, generationConfig, systemInstruction }),
      });
      const data = await geminiRes.json();
      return res.status(geminiRes.status).json(data);
    } catch (e) {
      console.error("Gemini error:", e);
      return res.status(500).json({ error: "Erreur IA" });
    }
  }
);

/**
 * Proxy Gemini pour génération d'images
 */
exports.aiImage = onRequest(
  { secrets: [GEMINI_SECRET], cors: ["https://onari-fitness.web.app", "https://onari-fitness.firebaseapp.com"] },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const authHeader = req.headers.authorization || "";
    if (!authHeader.startsWith("Bearer ")) return res.status(401).json({ error: "Non autorisé" });
    try {
      const { getAuth } = require("firebase-admin/auth");
      await getAuth().verifyIdToken(authHeader.split("Bearer ")[1]);
    } catch (e) {
      return res.status(401).json({ error: "Token invalide" });
    }

    const { contents, generationConfig } = req.body;
    if (!contents) return res.status(400).json({ error: "Champs manquants" });

    const key = GEMINI_SECRET.value();
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${key}`;

    try {
      const fetch = (await import("node-fetch")).default;
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents, generationConfig }),
      });
      const data = await r.json();
      return res.status(r.status).json(data);
    } catch (e) {
      return res.status(500).json({ error: "Erreur génération image" });
    }
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Création session de paiement
   POST /api/stripe/checkout
   Body: { priceId, promoCode? }
   Auth: Bearer Firebase ID token
   ════════════════════════════════════════════════════════ */
exports.stripeCheckout = onRequest(
  { secrets: [STRIPE_SECRET], cors: CORS },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    // Vérifier auth
    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Non autorisé" });
    let uid, email;
    try {
      const { getAuth } = require("firebase-admin/auth");
      const decoded = await getAuth().verifyIdToken(token);
      uid   = decoded.uid;
      email = decoded.email || "";
    } catch { return res.status(401).json({ error: "Token invalide" }); }

    const { priceId, promoCode } = req.body;
    if (!priceId || !Object.values(PRICES).includes(priceId)) {
      return res.status(400).json({ error: "Price ID invalide" });
    }

    const Stripe = require("stripe");
    const stripe = Stripe(STRIPE_SECRET.value(), { apiVersion: "2024-06-20" });
    const db = getFirestore();

    // Récupérer le customerId existant depuis Firestore (sans appeler Stripe)
    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();
    const customerId = userDoc.data()?.stripeCustomerId || null;

    // Construire les paramètres de la session
    // Si le customer existe déjà → l'utiliser, sinon laisser Stripe le créer
    const sessionParams = {
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "https://onari-fitness.web.app/?payment=success&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:  "https://onari-fitness.web.app/?payment=cancel",
      subscription_data: { trial_period_days: 7 },
      allow_promotion_codes: !promoCode,
    };

    // Passer l'uid Firebase pour relier le customer dans le webhook
    sessionParams.client_reference_id = uid;

    if (customerId) {
      sessionParams.customer = customerId;
    } else if (email) {
      // En mode subscription, Stripe crée le customer automatiquement via customer_email
      sessionParams.customer_email = email;
    }

    // Code promo explicite
    if (promoCode) {
      try {
        const promos = await stripe.promotionCodes.list({ code: promoCode, active: true, limit: 1 });
        if (promos.data.length > 0) {
          sessionParams.discounts = [{ promotion_code: promos.data[0].id }];
          delete sessionParams.allow_promotion_codes;
          delete sessionParams.subscription_data;
        }
      } catch { /* ignorer */ }
    }

    try {
      const session = await stripe.checkout.sessions.create(sessionParams);
      return res.json({ url: session.url });
    } catch (e) {
      console.error("Stripe session error:", e.message);
      return res.status(500).json({ error: e.message });
    }
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Setup Intent pour paiement intégré
   POST /api/stripe/setup
   Body: { priceId }
   Auth: Bearer Firebase ID token
   Retourne: { clientSecret } d'un SetupIntent lié à un abonnement 7j trial
   ════════════════════════════════════════════════════════ */
exports.stripeSetup = onRequest(
  { secrets: [STRIPE_SECRET], cors: CORS },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Non autorisé" });
    let uid, email;
    try {
      const { getAuth } = require("firebase-admin/auth");
      const decoded = await getAuth().verifyIdToken(token);
      uid   = decoded.uid;
      email = decoded.email || "";
    } catch { return res.status(401).json({ error: "Token invalide" }); }

    const { priceId, promoCode } = req.body;
    if (!priceId || !Object.values(PRICES).includes(priceId)) {
      return res.status(400).json({ error: "Price ID invalide" });
    }

    const fetch = (await import("node-fetch")).default;
    const sk = STRIPE_SECRET.value();
    const auth = "Basic " + Buffer.from(sk + ":").toString("base64");
    const db = getFirestore();

    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();
    let customerId = userDoc.data()?.stripeCustomerId || null;

    async function getOrCreateCustomer() {
      if (customerId) {
        // Vérifier que le customer existe bien (peut être un ID de test)
        const check = await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
          headers: { Authorization: auth },
        });
        const data = await check.json();
        if (data.error) {
          // Customer introuvable (ex: ID de mode test) → en créer un nouveau
          customerId = null;
          await userRef.set({ stripeCustomerId: null }, { merge: true });
        }
      }
      if (!customerId) {
        const p = new URLSearchParams();
        if (email) p.set("email", email);
        p.set("metadata[firebase_uid]", uid);
        const r = await fetch("https://api.stripe.com/v1/customers", {
          method: "POST",
          headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
          body: p.toString(),
        });
        const cust = await r.json();
        if (cust.error) throw new Error(cust.error.message);
        customerId = cust.id;
        await userRef.set({ stripeCustomerId: customerId }, { merge: true });
      }
      return customerId;
    }

    try {
      await getOrCreateCustomer();

      // Valider le code promo si fourni
      let promotionCodeId = null;
      if (promoCode) {
        const pcRes = await fetch(
          `https://api.stripe.com/v1/promotion_codes?code=${encodeURIComponent(promoCode)}&limit=5`,
          { headers: { Authorization: auth } }
        );
        const pcData = await pcRes.json();
        console.log("Promo code lookup for", promoCode, ":", JSON.stringify(pcData));
        if (pcData.data && pcData.data.length > 0) {
          const activeCode = pcData.data.find(p => p.active);
          if (activeCode) {
            promotionCodeId = activeCode.id;
            console.log("Using promo code:", promotionCodeId, "coupon:", activeCode.coupon?.id);
          } else {
            const firstCode = pcData.data[0];
            return res.status(400).json({
              error: "Code promo désactivé",
              debug: `id:${firstCode.id} actif:${firstCode.active} coupon:${firstCode.coupon?.id}`
            });
          }
        } else {
          return res.status(400).json({
            error: "Code promo introuvable",
            debug: pcData.error ? pcData.error.message : "aucun résultat"
          });
        }
      }

      // Cas promo 100% : créer l'abonnement sans demander de carte
      if (promotionCodeId) {
        const sp = new URLSearchParams();
        sp.set("customer", customerId);
        sp.set("items[0][price]", priceId);
        sp.set("trial_period_days", "7");
        sp.set("discounts[0][promotion_code]", promotionCodeId);
        const sr = await fetch("https://api.stripe.com/v1/subscriptions", {
          method: "POST",
          headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
          body: sp.toString(),
        });
        const sub = await sr.json();
        if (sub.error) return res.status(400).json({ error: sub.error.message });
        // Mettre à jour Firestore directement (sans attendre le webhook)
        let plan = "free";
        if (PREMIUM_PRICES.includes(priceId)) plan = "premium";
        if (ELITE_PRICES.includes(priceId))   plan = "elite";
        await db.collection("users").doc(uid).set(
          { subscription: { plan, status: sub.status, priceId, subscriptionId: sub.id, updatedAt: Date.now() } },
          { merge: true }
        );
        return res.json({ promoActivated: true, plan, subscriptionId: sub.id });
      }

      // Cas normal : trial 7j avec carte (pending_setup_intent)
      const sp = new URLSearchParams();
      sp.set("customer", customerId);
      sp.set("items[0][price]", priceId);
      sp.set("trial_period_days", "7");
      sp.set("payment_behavior", "default_incomplete");
      sp.set("expand[]", "pending_setup_intent");

      const sr = await fetch("https://api.stripe.com/v1/subscriptions", {
        method: "POST",
        headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
        body: sp.toString(),
      });
      const sub = await sr.json();
      if (sub.error) return res.status(400).json({ error: sub.error.message });

      const clientSecret = sub.pending_setup_intent?.client_secret;
      if (!clientSecret) return res.status(500).json({ error: "Setup intent manquant" });

      return res.json({ clientSecret, subscriptionId: sub.id });
    } catch (e) {
      console.error("stripeSetup error:", e);
      return res.status(500).json({ error: e.message || "Erreur serveur" });
    }
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Portail client (gérer abonnement)
   POST /api/stripe/portal
   ════════════════════════════════════════════════════════ */
exports.stripePortal = onRequest(
  { secrets: [STRIPE_SECRET], cors: CORS },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Non autorisé" });
    let uid;
    try {
      const { getAuth } = require("firebase-admin/auth");
      uid = (await getAuth().verifyIdToken(token)).uid;
    } catch { return res.status(401).json({ error: "Token invalide" }); }

    const Stripe = require("stripe");
    const stripe = Stripe(STRIPE_SECRET.value(), { apiVersion: "2024-06-20" });
    const db = getFirestore();

    const userDoc = await db.collection("users").doc(uid).get();
    const customerId = userDoc.data()?.stripeCustomerId;
    if (!customerId) return res.status(400).json({ error: "Aucun compte Stripe" });

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: "https://onari-fitness.web.app/",
    });
    return res.json({ url: session.url });
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Sync utilisateur Firebase → Stripe
   POST /api/stripe/sync
   Crée ou met à jour le customer Stripe pour un utilisateur Firebase
   ════════════════════════════════════════════════════════ */
exports.stripeSync = onRequest(
  { secrets: [STRIPE_SECRET], cors: CORS },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Non autorisé" });

    let uid, email, displayName;
    try {
      const { getAuth } = require("firebase-admin/auth");
      const decoded = await getAuth().verifyIdToken(token);
      uid         = decoded.uid;
      email       = decoded.email || "";
      displayName = decoded.name  || "";
    } catch { return res.status(401).json({ error: "Token invalide" }); }

    const fetch = (await import("node-fetch")).default;
    const sk    = STRIPE_SECRET.value();
    const auth  = "Basic " + Buffer.from(sk + ":").toString("base64");
    const db    = getFirestore();

    const userRef  = db.collection("users").doc(uid);
    const userDoc  = await userRef.get();
    let customerId = userDoc.data()?.stripeCustomerId || null;

    try {
      if (customerId) {
        // Vérifier que le customer existe et mettre à jour ses infos
        const check = await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
          headers: { Authorization: auth },
        });
        const data = await check.json();
        if (data.error) {
          customerId = null; // Customer invalide → en créer un nouveau
        } else {
          // Mettre à jour l'email et le nom si manquants
          if (email && data.email !== email) {
            const upd = new URLSearchParams();
            if (email)       upd.set("email", email);
            if (displayName) upd.set("name",  displayName);
            upd.set("metadata[firebase_uid]", uid);
            await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
              method: "POST",
              headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
              body: upd.toString(),
            });
          }
          return res.json({ customerId, created: false });
        }
      }

      // Créer un nouveau customer Stripe
      const p = new URLSearchParams();
      if (email)       p.set("email", email);
      if (displayName) p.set("name",  displayName);
      p.set("metadata[firebase_uid]", uid);
      const r = await fetch("https://api.stripe.com/v1/customers", {
        method: "POST",
        headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
        body: p.toString(),
      });
      const cust = await r.json();
      if (cust.error) throw new Error(cust.error.message);
      customerId = cust.id;
      await userRef.set({ stripeCustomerId: customerId }, { merge: true });
      return res.json({ customerId, created: true });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Résiliation abonnement
   POST /api/stripe/cancel
   ════════════════════════════════════════════════════════ */
exports.stripeCancel = onRequest(
  { secrets: [STRIPE_SECRET], cors: CORS },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Non autorisé" });
    let uid;
    try {
      const { getAuth } = require("firebase-admin/auth");
      uid = (await getAuth().verifyIdToken(token)).uid;
    } catch { return res.status(401).json({ error: "Token invalide" }); }

    const fetch = (await import("node-fetch")).default;
    const sk    = STRIPE_SECRET.value();
    const auth  = "Basic " + Buffer.from(sk + ":").toString("base64");
    const db    = getFirestore();

    const userDoc    = await db.collection("users").doc(uid).get();
    const customerId = userDoc.data()?.stripeCustomerId;
    const subId      = userDoc.data()?.subscription?.subscriptionId;

    if (!customerId) return res.status(400).json({ error: "Aucun compte Stripe" });

    try {
      // Trouver l'abonnement actif (priorité sur subscriptionId enregistré)
      let targetSubId = subId;
      if (!targetSubId) {
        const subsRes = await fetch(
          `https://api.stripe.com/v1/subscriptions?customer=${customerId}&status=trialing&limit=1`,
          { headers: { Authorization: auth } }
        );
        const subsData = await subsRes.json();
        if (!subsData.data?.length) {
          const activeRes = await fetch(
            `https://api.stripe.com/v1/subscriptions?customer=${customerId}&status=active&limit=1`,
            { headers: { Authorization: auth } }
          );
          const activeData = await activeRes.json();
          targetSubId = activeData.data?.[0]?.id;
        } else {
          targetSubId = subsData.data[0].id;
        }
      }
      if (!targetSubId) return res.status(400).json({ error: "Aucun abonnement actif" });

      // Annuler à la fin de la période en cours (pas immédiatement)
      const cancelRes = await fetch(
        `https://api.stripe.com/v1/subscriptions/${targetSubId}`,
        {
          method: "POST",
          headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ cancel_at_period_end: "true" }).toString(),
        }
      );
      const cancelData = await cancelRes.json();
      if (cancelData.error) return res.status(400).json({ error: cancelData.error.message });

      // Mettre à jour Firestore
      await db.collection("users").doc(uid).set(
        { subscription: { status: "canceled", plan: "free", updatedAt: Date.now() } },
        { merge: true }
      );
      return res.json({ canceled: true, cancelAt: cancelData.cancel_at });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

/* ════════════════════════════════════════════════════════
   STRIPE — Webhook (événements Stripe → Firestore)
   POST /api/stripe/webhook
   ════════════════════════════════════════════════════════ */
exports.stripeWebhook = onRequest(
  { secrets: [STRIPE_SECRET, STRIPE_WEBHOOK], cors: false, rawBody: true },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();

    const Stripe = require("stripe");
    const stripe = Stripe(STRIPE_SECRET.value(), { apiVersion: "2024-06-20" });
    const sig    = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, STRIPE_WEBHOOK.value());
    } catch (e) {
      return res.status(400).send(`Webhook error: ${e.message}`);
    }

    const db = getFirestore();

    async function _updatePlan(customerId, priceId, status) {
      const snap = await db.collection("users")
        .where("stripeCustomerId", "==", customerId).limit(1).get();
      if (snap.empty) return;
      let plan = "free";
      if (PREMIUM_PRICES.includes(priceId)) plan = "premium";
      if (ELITE_PRICES.includes(priceId))   plan = "elite";
      await snap.docs[0].ref.set(
        { subscription: { plan, status, priceId, updatedAt: Date.now() } },
        { merge: true }
      );
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        // Sauvegarder le customerId Stripe dès le checkout
        // client_reference_id = Firebase UID (passé dans l'URL du Payment Link)
        if (session.customer && session.client_reference_id) {
          await db.collection("users").doc(session.client_reference_id).set(
            { stripeCustomerId: session.customer },
            { merge: true }
          );
        }
        // subscription.created/updated va mettre à jour le plan automatiquement
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.created": {
        const sub = event.data.object;
        await _updatePlan(sub.customer, sub.items.data[0]?.price?.id || "", sub.status);
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        const snap = await db.collection("users")
          .where("stripeCustomerId", "==", sub.customer).limit(1).get();
        if (!snap.empty) {
          await snap.docs[0].ref.set(
            { subscription: { plan: "free", status: "cancelled", updatedAt: Date.now() } },
            { merge: true }
          );
        }
        break;
      }
    }

    return res.json({ received: true });
  }
);
