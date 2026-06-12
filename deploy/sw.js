/* ═══════════════════════════════════════════════════
   ONARI FITNESS — Service Worker
   Offline-first + Notifications repos
   ═══════════════════════════════════════════════════ */

const CACHE_NAME = 'onari-v24-ux-fixes';
const SHELL = ['/'];

// ── Install : mise en cache du shell ──────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(SHELL))
  );
  self.skipWaiting();
});

// ── Activate : nettoyage anciens caches ───────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch : network-first avec fallback cache ─────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Ne pas intercepter les appels Firebase/CDN externes
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('/')))
  );
});

// ── Messages depuis la page ───────────────────────────
self.addEventListener('message', e => {
  if (!e.data) return;

  // Notification repos terminé
  if (e.data.type === 'REST_DONE') {
    self.registration.showNotification(e.data.title || '💪 Repos terminé !', {
      body:      e.data.body  || "C'est l'heure de reprendre !",
      icon:      '/icons/icon-192.png',
      badge:     '/icons/icon-192.png',
      tag:       'onari-rest',
      renotify:  true,
      vibrate:   [200, 100, 200],
      requireInteraction: false,
      data: { url: '/' }
    });
  }

  // Skip waiting (mise à jour forcée)
  if (e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── Clic sur une notification ─────────────────────────
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      const target = cs.find(c => c.url.includes(self.location.origin));
      if (target) return target.focus();
      return clients.openWindow('/');
    })
  );
});
