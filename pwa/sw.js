// Files to cache
const cacheName = 'chains-pwa-v1';
const appShellFiles = [
    '/',
    '/index.html',
    '/404.html',
    '/css/color.css',
    '/css/main.css',
    '/js/main.js',
    '/js/mdfile.js',
    '/md/*.md',
    '/pwa/img/maskable_icon_x48.png',
    '/pwa/img/maskable_icon_x72.png',
    '/pwa/img/maskable_icon_x96.png',
    '/pwa/img/maskable_icon_x128.png',
    '/pwa/img/maskable_icon_x192.png',
    '/pwa/img/maskable_icon_x384.png',
    '/pwa/img/maskable_icon_x512.png',
    '/pwa/manifest.json',
    '/pwa/sw.js',
];

// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    // Cache http and https only, skip unsupported chrome-extension:// and file://...
    if (!(
        e.request.url.startsWith('http:') || e.request.url.startsWith('https:')
    )) {
        return;
    }

    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});