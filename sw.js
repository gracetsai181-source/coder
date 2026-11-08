/* Coder之影音沉浸世界｜Service Worker
 * 只快取「網站外殼」（圖示與離線頁）。網頁本體、catalog.js、影片、圖片、Google Sheets 資料一律即時讀取最新內容，
 * 所以更新網站後使用者不會一直看到舊版。網路中斷時，開啟網站會顯示離線提示頁。
 * 之後如果改了圖示或離線頁，把下面的版本號加 1 即可。 */
const CACHE = 'coder-shell-v1';
const SHELL = ['offline.html', 'manifest.json', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // CDN、Google Apps Script 等外部請求不介入
  if (req.headers.has('range')) return;                // 影片/音樂的分段讀取不介入

  // 開啟網頁：優先讀取網路最新版，失敗（離線）才顯示離線頁
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('offline.html')));
    return;
  }
  // 外殼檔案（圖示、manifest、離線頁）：先讀快取
  const rel = url.pathname.replace(/^.*?\/((?:icons\/|offline\.html|manifest\.json).*)$/, '$1');
  if (SHELL.includes(rel)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
  }
});
