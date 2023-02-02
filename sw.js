const STATIC_CACHE = "static";
// se declara un vector con la ubocacion y el nombre de los //
const APP_SHELL =[ 
    "/",
    "index.html",
    "styles/style.css",
    "functions.js",
    "main.js",
    "script1.js",
    "script2.js",
    "images/beerjs-logo.png",
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);

});

self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);

    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch(e.request))
        .catch(console.log)
    )
});
