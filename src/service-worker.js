const assets = [
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Source+Sans+Pro:wght@400;600&display=swap',
  'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css',
  'https://jsonplaceholder.typicode.com/todos/1'
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('dynamic-assets').then(cache => {
			cache.addAll(assets);
			console.log('caching shell assets');
		})
	);
})

self.addEventListener('fetch', event => {
  if (event.request.url.indexOf('fonts.googleapis.com') === -1) {
    event.respondWith(
			caches.match(event.request)
			.then(cacheRes => {
				return cacheRes || fetch(event.request).then(fetchRes => {
					return caches.open('dynamic-assets').then(cache => {

						// cache.put(key, value)
						cache.put(event.request.url, fetchRes.clone());
						return fetchRes
					})
				});
			})
			.catch((error) => {
        console.error('error gan', error);
			})
		)
  }
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});