self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request)
    })
  );
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        './index.html',
        '/static/js/bundle.js',
        '/static/css/main.css',
      ])
    })
  )
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(response => {
        return response || fetch(event.request);
      })
    );
  }
});