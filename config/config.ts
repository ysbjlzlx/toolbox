import {defineConfig} from 'umi';

import routes from './routes';

export default defineConfig({
  favicon: '/favicon.ico',
  metas: [{name: 'theme-color', content: '#000000'}],
  links: [
    {rel: 'manifest', href: '/manifest.json'},
    {rel: 'apple-touch-icon', href: '/icons/icon-x192.png'},
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  dynamicImport: {
    loading: '@/Loading',
  },
  mfsu: {},
});
