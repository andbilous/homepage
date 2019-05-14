/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/avatar.jpg",
    "revision": "7ecdba61b5da9da1bc4fb230a5c27d4c"
  },
  {
    "url": "img/smile-icon.png",
    "revision": "6d8de920a1e2c37092dffddf41fc21ed"
  },
  {
    "url": "img/travel.png",
    "revision": "5c4a0cff47c1745534f19cd59cd29e54"
  },
  {
    "url": "index.html",
    "revision": "846b2e051496882be3339d5733cbf60f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
