const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/To-Do-List/",
  "/To-Do-List / index.html",
  "/To-Do-List / style.css",
  "/To-Do-List / app.js",
  "/To-Do-List / manifest.json",
  "/To-Do-List / icons/icon-128.png",
  "/To-Do-List / icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
