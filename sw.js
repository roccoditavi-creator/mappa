const C="mappa-v67";const F=["./","index.html","dati_replay.js","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))))});
self.addEventListener("fetch",e=>{if(e.request.url.startsWith("http")&&new URL(e.request.url).origin===location.origin)e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)))});
