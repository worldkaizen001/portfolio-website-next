// self.addEventListener("install", function (event) {
//   console.log("Hello world from the Service Worker 🤙");
// });
//
//
// currently under development
//
//

const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// install sw

self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// fetch sw

self.addEventListener("fetch", function (event: any) {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// activate sw

self.addEventListener("activate", function (event: any) {
  // console.log("Hello world from the Service Worker 🤙");
});

export {};

// Install SW
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//       caches.open(CACHE_NAME)
//           .then((cache) => {
//               console.log('Opened cache');

//               return cache.addAll(urlsToCache);
//           })
//   )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//       caches.match(event.request)
//           .then(() => {
//               return fetch(event.request)
//                   .catch(() => caches.match('offline.html'))
//           })
//   )
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);

//   event.waitUntil(
//       caches.keys().then((cacheNames) => Promise.all(
//           cacheNames.map((cacheName) => {
//               if(!cacheWhitelist.includes(cacheName)) {
//                   return caches.delete(cacheName);
//               }
//           })
//       ))

//   )
// });
