export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {path: '/', component: '@/pages/App', title: 'Toolbox'},
      {path: '/json', component: '@/pages/Json', title: 'JSON - Toolbox'},
      {path: '/url', component: '@/pages/URL', title: 'URL - Toolbox'},
      {
        path: '/markdown',
        component: '@/pages/Markdown',
        title: 'Markdonw - Toolbox',
      },
      {path: 'random', component: '@/pages/Random', title: 'Random - Toolbox'},
      {path: '/base64', component: '@/pages/Base64', title: 'Base64 - Toolbox'},
      {path: '/excel', component: '@/pages/Excel', title: 'Excel - Toolbox'},
      {path: '/hash', component: '@/pages/Hash', title: 'Hash - Toolbox'},
      {path: '/qrcode', component: '@/pages/QrCode', title: 'QRCode - Toolbox'},
    ],
  },
];
