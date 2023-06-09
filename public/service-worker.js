if (!self.define) {
  let e,
    c = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    c[s] ||
      new Promise((c) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = c), document.head.appendChild(e);
        } else (e = s), importScripts(s), c();
      }).then(() => {
        let e = c[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (c[t]) return;
    let a = {};
    const o = (e) => s(e, t),
      r = { module: { uri: t }, exports: a, require: o };
    c[t] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (i(...e), a));
  };
}
define(['./workbox-7c2a5a06'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: 'f4562c8198287934cca4fc386581bbbb' },
        { url: '/_next/static/-X6vIBOpneeH-c-ocfkcV/_buildManifest.js', revision: '8ae8d7690cc06544c92639efa715113d' },
        { url: '/_next/static/-X6vIBOpneeH-c-ocfkcV/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/1083-51d2c7da64ef81a7.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/10979a94-d0e4d9dfd4263d11.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/129-2607303862863f62.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/1841-4f2b6fb3c1cec3b4.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2210-c3e49e3a78bc4778.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2307.c7f3d0d8283f27b7.js', revision: 'c7f3d0d8283f27b7' },
        { url: '/_next/static/chunks/2335-51181e0c5b0e0436.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2375-259bcfb46d0ab508.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2443530c-05986d6338539ba9.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2589.a89b7fdc8c17e546.js', revision: 'a89b7fdc8c17e546' },
        { url: '/_next/static/chunks/2631.90aeb61647ee0829.js', revision: '90aeb61647ee0829' },
        { url: '/_next/static/chunks/2805-749e6c836e60377d.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2911.1f1ca4be116ef999.js', revision: '1f1ca4be116ef999' },
        { url: '/_next/static/chunks/2913-534555cfabdfd49a.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2968-92c56b23d8686914.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2995-5df94e25ec0c0813.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/2bd3000f-2ca38653187e8a88.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/3113-844a02c00074e609.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/323-53e90e9708eec8d3.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/3713.4746ac178626b851.js', revision: '4746ac178626b851' },
        { url: '/_next/static/chunks/3746.1f6ec7106bfdc1c0.js', revision: '1f6ec7106bfdc1c0' },
        { url: '/_next/static/chunks/3772-e69f685c2da67661.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/3788-50c4e800c044036e.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/3909-18fb2bde862a0633.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/3c8daecd-40036536bb07f8f5.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/4066-a39b699405cf0624.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/4863-4154911c846c0242.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/4878-874f116a16d69be1.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/5189-4d380f4085a18569.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/5204.3edb841ad23097e4.js', revision: '3edb841ad23097e4' },
        { url: '/_next/static/chunks/5247-ba2103a97d7495d8.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/5988-a54f399723e10159.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6117-335e0960401ddd00.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6158-3fc73189eb517081.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/622-b35a83cff9c43887.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6330-60f6cb05e32b71f2.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6349-16ed2eb905635b0c.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/643-0932a117ca7ebeab.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6488-251f1dd78686fa38.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6705-6d359662c59695b5.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6798-4b80dd99bc54383b.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6880-a3d41729d8050851.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6935.d77ea3d54f50923e.js', revision: 'd77ea3d54f50923e' },
        { url: '/_next/static/chunks/6959-816f84a89d3663f9.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/6978-40b7010d4413b891.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7057-72d5a9484dbbdf2f.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7195-317f743a62831f82.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7667-b6f1c54868f29913.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7747-9debb719a18197bf.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7812-152011a7043a6580.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/7942-be2e4419f42078a5.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/8071-ebd88479236cbee9.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/811-5b9d35148346fa29.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/8211-5e070743938d6f6f.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/8225.d60f649ea9b86366.js', revision: 'd60f649ea9b86366' },
        { url: '/_next/static/chunks/8796-3663bc72489675a0.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/8918-cc05e4ec3aeac4c1.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/922.1e2343457bb3007b.js', revision: '1e2343457bb3007b' },
        { url: '/_next/static/chunks/9497.23ac12052ad93bd0.js', revision: '23ac12052ad93bd0' },
        { url: '/_next/static/chunks/98-74354731b45c7b2a.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/9857.8e90ca096396a74e.js', revision: '8e90ca096396a74e' },
        { url: '/_next/static/chunks/9861-5ab5eebbac3efb96.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        {
          url: '/_next/static/chunks/app/(default)/base64/page-fc98630e97ad16a7.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/code-formatter/page-9b33c4e58c1320c1.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/doc-editor/page-28c4e75bf62c8130.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        { url: '/_next/static/chunks/app/(default)/excel/page-ec342ea3dd9c60f0.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        {
          url: '/_next/static/chunks/app/(default)/generator/id/page-3343180308344cb7.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/generator/image/page-ec0d4ca3873f308a.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/generator/string/page-96fcc2b53831deec.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        { url: '/_next/static/chunks/app/(default)/hash/page-fadc456faf28d2c6.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        {
          url: '/_next/static/chunks/app/(default)/json/json-editor/page-f049082c67488e20.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/json/json-to-excel/page-845cd23139dec4a7.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/json/json-to-yaml/page-3baf52c6da88f3e9.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        { url: '/_next/static/chunks/app/(default)/layout-50c3b49608c3dd3f.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        {
          url: '/_next/static/chunks/app/(default)/markdown/page-fae719df05a8d957.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/qrcode/page-934a830bb743d5ba.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        {
          url: '/_next/static/chunks/app/(default)/timestamp/page-a40a4c8de37ff604.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        { url: '/_next/static/chunks/app/(default)/totp/page-838dd1d6e4695175.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/app/(default)/url/page-46133521040b201e.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        {
          url: '/_next/static/chunks/app/(default)/writer/page-41e0462f42bed0d5.js',
          revision: '-X6vIBOpneeH-c-ocfkcV',
        },
        { url: '/_next/static/chunks/app/(default)/yaml/page-c09ec9641f819f31.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/app/layout-3cf139d252e48a0e.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/app/loading-7f03432891cd798c.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/app/not-found-23be7185983538a8.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/app/page-194f37b33c5d500e.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/d24c7ea9-765a6432e38c0542.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/dc54ede8.98a9da1c95294313.js', revision: '98a9da1c95294313' },
        { url: '/_next/static/chunks/fb59bf0b.758365e5b353bcc6.js', revision: '758365e5b353bcc6' },
        { url: '/_next/static/chunks/fbd285cf.9673ec6541a496fc.js', revision: '9673ec6541a496fc' },
        { url: '/_next/static/chunks/framework-4498e84bb0ba1830.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/main-01edeeeb880925a1.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/main-app-86103356b84cc12a.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/pages/_app-ed2c3d0606c6e9b2.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/pages/_error-635fbc803b916a72.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-4b0222c3a33eebf0.js', revision: '-X6vIBOpneeH-c-ocfkcV' },
        { url: '/_next/static/css/6f24be6cbfc0f2e6.css', revision: '6f24be6cbfc0f2e6' },
        { url: '/_next/static/css/dfe835a0cbb32729.css', revision: 'dfe835a0cbb32729' },
        { url: '/favicon.ico', revision: '441b8874758a6ef70838f792d8764e21' },
        { url: '/icons/icon-x128.png', revision: 'd5d21351769194c38e427ae74564df50' },
        { url: '/icons/icon-x192.png', revision: '83583f303ad5fef0740f9e2f77090f35' },
        { url: '/icons/icon-x384.png', revision: 'bbdb03f8a224fb166eeafb2c46017684' },
        { url: '/icons/icon-x48.png', revision: 'edd2c089890bd05ce9771cd69c50b261' },
        { url: '/icons/icon-x512.png', revision: '5a00331d1c568bacf16fecc437f5306e' },
        { url: '/icons/icon-x72.png', revision: '9207e2295c4f1ef401f3273dd7ff11ab' },
        { url: '/icons/icon-x96.png', revision: '8e23ced82830608ec467fafc2ca0e627' },
        { url: '/icons/icon.png', revision: '56c8f2576ae3d6ba4eb58964bc7f05f0' },
        { url: '/index.html', revision: 'd8b50f03ba9a9a298fefeb198645fad9' },
        { url: '/locales/en/translation.json', revision: '249a968f32c6de7e5f6f746cf1d1614c' },
        { url: '/locales/zh-Hans/translation.json', revision: 'f047ecc437df687194b11c17a3d92e02' },
        { url: '/logo.png', revision: '631ff8e7878674716516354a4e3f7bda' },
        { url: '/logo.svg', revision: '1411852824106297012880d8cdf2a0e6' },
        { url: '/manifest.json', revision: 'de7424e54b0300696dfe580fc7bf09f5' },
        { url: '/robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
        { url: '/se.js', revision: 'b25dbe8411f98405ba01adaf3342cf7e' },
        { url: '/se.js.map', revision: 'bf9940315690ce98a55b975a3d696916' },
        { url: '/sw.js', revision: '34908eb8cebe328a183e3628aeea4566' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: c, event: s, state: n }) =>
              c && 'opaqueredirect' === c.type
                ? new Response(c.body, { status: 200, statusText: 'OK', headers: c.headers })
                : c,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const c = e.pathname;
        return !c.startsWith('/api/auth/') && !!c.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
