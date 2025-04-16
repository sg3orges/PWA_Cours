const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    
];

self.addEventListener('install', evt =>{
    //console.log('service worker has been installed ');
    caches.open(staticCacheName).then(cache => {
        console.log("caching shell asset");// nous permes de vérifier si les cache sont bien télécharger
        cache.addAll(assets)
    })
});

// activate event
self.addEventListener('activate',evt=> {
    //console.log('service worker has beenactivated')
})
//fetch event 
self.addEventListener('fetch', evt=>{
    //console.log('fetch event',evt); 
});

