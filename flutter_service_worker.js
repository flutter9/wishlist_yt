'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "e9a27522f1ce7312c9863cd52dc00505",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "4ef3ae2581e4b59b2e2afa4d5b5130ba",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/penguin.png": "e0aa37a6bee66d56dc6fecd593a6cb99",
"/assets/assets/header.jpg": "5804ee8066676649841bb6012b37167e",
"/assets/assets/santa.jpg": "7515f4bbe8117bb1248f2c5114bfab2a",
"/assets/assets/bear.png": "c24e60a7d8db1610515e688d617316a4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
