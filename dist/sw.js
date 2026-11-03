const CACHE = "dicionario-judo-v25";
const ASSETS = ["/", "/index.html", "/manifest.webmanifest", "/data.json", "/icons/app-icon-escaliante.png", "/icons/sensei-escaliante-logo.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const refreshFirst = event.request.mode === "navigate" || ["/", "/index.html", "/data.json", "/manifest.webmanifest", "/sw.js"].includes(url.pathname);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (refreshFirst) {
      try {
        const response = await fetch(event.request, { cache: "no-cache" });
        if (response.ok) await cache.put(event.request, response.clone());
        return response;
      } catch {
        return await cache.match(event.request, { ignoreSearch: true }) || await cache.match(url.pathname) || await cache.match("/index.html");
      }
    }
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return await cache.match("/index.html");
    }
  })());
});
