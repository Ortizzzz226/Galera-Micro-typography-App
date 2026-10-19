/* Galera · service worker. Versión: 2026.10.19-0927
   - La página (index.html) se pide primero a internet, para que las actualizaciones lleguen solas;
     sin conexión se usa la copia guardada.
   - Íconos y librerías se guardan al instalar.
   - Las fuentes de Google se guardan la primera vez que se usan. */
const V = "galera-2026.10.19-0927";
const FONTS = "galera-fonts";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/favicon-32.png",
  "vendor/jszip.min.js", "vendor/jspdf.umd.min.js", "vendor/docx.umd.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
function timeout(ms){ return new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)); }
self.addEventListener("fetch", e => {
  const req = e.request; if(req.method !== "GET") return;
  const url = new URL(req.url);
  if(req.mode === "navigate" || (url.origin === location.origin && /\/(index\.html)?$/.test(url.pathname))){
    e.respondWith((async () => {
      const c = await caches.open(V);
      try{
        const res = await Promise.race([fetch(req, {cache: "no-cache"}), timeout(4000)]);
        if(res && res.ok) c.put("index.html", res.clone());
        return res;
      }catch(err){
        return (await c.match("index.html")) || (await c.match("./")) || Response.error();
      }
    })());
    return;
  }
  if(url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com"){
    e.respondWith((async () => {
      const c = await caches.open(FONTS);
      const hit = await c.match(req);
      const net = fetch(req).then(res => { if(res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }).catch(() => null);
      return hit || (await net) || Response.error();
    })());
    return;
  }
  if(url.origin === location.origin){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if(res && res.ok){ const cl = res.clone(); caches.open(V).then(c => c.put(req, cl)); }
      return res;
    })));
  }
});
