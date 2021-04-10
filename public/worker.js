const CACHE_NAME = 'veg-share';
const urlsToCache = [
  '/',

];

// Install service worker
self.addEventLstener('install', event => {
  // installation
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache!');
        return cache.addAll(urlsToCache);
      })
  )
})

// Cache an return requests
self.addEventListener('fetch', event => {
  event.respndWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  )
})

// Update a service worker
self.addEventListener('activate', event => {
  const cacheList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
}) 