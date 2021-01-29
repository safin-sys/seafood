const cacheName = 'beta';

//Install
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');
})

//Activate
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    //Remove cache
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

//Fetch
self.addEventListener('fetch', e => {
    console.log('Service Worked: Fetching');
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();
                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, resClone);
                    })
                return res;
            }).catch(err => caches.match(e.request).then(res => res))
    )
})