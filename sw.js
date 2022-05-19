//cuando se instala el service worker

//cuando queremos que nuestra aplicacion funcione sin que este conectada a internet
const nombreCache = 'generadorMeme-v1';
const archivos = [
    '/',
    '/index.html',
    '/generarMeme.html',
    '/error.html',
    '/css/normalize.css',
    '/css/style.css',
    '/js/apis.js',
    '/js/app.js',
    '/js/comprobarSW.js',
    '/js/generarMeme.js',
    '/js/interfaz.js',
    '/manifest.json',
];


//este evento solo se ejecuta una vez
self.addEventListener('install', e => {
    console.log('instalado el service worker');

    //Luego de instalar vamos esperar todos los archivos del cache
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )
});


//esto se ejecuta cuando es activado
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);
})


//Eventos fetch para descargar archovs estaticos y cuando esté offline
self.addEventListener('fetch', function (event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request).then(function (response) {
                if (response.status === 404) {
                    return caches.match('./error.html');
                }
                return response
            });
        })
    );
});