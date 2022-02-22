export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {path: '/', component: '@/pages/App'},
      {path: '/json', component: '@/pages/Json'},
      {path: '/url', component: '@/pages/URL'},
      {path: '/markdown', component: '@/pages/Markdown'},
      {path: 'random', component: '@/pages/Random'},
      {path: '/base64', component: '@/pages/Base64'},
      {path: '/excel', component: '@/pages/Excel'},
    ],
  },
];
