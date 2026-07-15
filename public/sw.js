/**
 * COSMIC ID Service Worker
 *
 * 目的:オフラインでもコア体験(入力フォーム画面)が開けるようにする。
 * 決済・API連携は未実装のため、複雑なキャッシュ戦略(Workbox等)は導入せず、
 * Cache API を直接叩くシンプルな自前実装に留める。
 *
 * 戦略: Network-first, cache-fallback。
 * ビルド後の JS/CSS はハッシュ付きファイル名になるため、事前に列挙せず、
 * 通常利用時に fetch されたレスポンスをその都度キャッシュへ蓄積する。
 * オフライン時のナビゲーションは index.html にフォールバックする。
 */

const CACHE_NAME = 'cosmic-id-v1';
const SCOPE_URL = self.registration.scope; // 例: https://tannyann.github.io/cosmic-id/
const CORE_ASSETS = [
  SCOPE_URL,
  `${SCOPE_URL}index.html`,
  `${SCOPE_URL}manifest.webmanifest`,
  `${SCOPE_URL}icon-192.png`,
  `${SCOPE_URL}icon-512.png`,
  `${SCOPE_URL}icon-512-maskable.png`
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // Google Fonts 等の外部リソースは素通し

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') {
          const shell = await caches.match(`${SCOPE_URL}index.html`);
          if (shell) return shell;
        }
        return Response.error();
      })
  );
});
