/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('[SW]: install', event);
});

self.addEventListener('activate', (event) => {
  console.log('[SW]: activate', event);
});
