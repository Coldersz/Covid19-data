workbox.core.setCacheNameDetails({
	prefix: 'CovidTracker',
	precahce: 'precache',
	runtime: 'runtime'
});

workbox.routing.registerRoute(
	({url}) => url.origin === 'https://fonts.googleapis.com',
	workbox.strategies.cacheFirst({
		cacheName: 'CovidTracker-google-fonts',
		plugins:[
			new workbox.cacheableResponse.Plugin({statuses:[0,200]}),
			new workbox.expiration.Plugin({maxAgeSeconds: 60 * 60 * 24 * 30}),
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('\.css$'),
	workbox.strategies.cacheFirst({
		cacheName: 'CovidTracker-cache-stylesheets',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24,
				maxEntries: 30,
				purgeOnQuotaError: true
			})
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('\.js$'),
	workbox.strategies.cacheFirst({
		cacheName: 'CovidTracker-cache-scripts',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24,
				maxEntries: 30,
				purgeOnQuotaError: true
			})
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('\.[png|svg|jpg|jpeg]$'),
	workbox.strategies.cacheFirst({
		cacheName: 'CovidTracker-cache-images',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24,
				maxEntries: 30,
				purgeOnQuotaError: true
			})
		]
	})
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});