import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/components/NotFound';
import BaseLayout from '@/layouts/BaseLayout.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    lazy: () => import('@/pages/page'),
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/base64',
        lazy: () => import('@/pages/base64/page'),
      },
      {
        path: '/code-formatter',
        lazy: () => import('@/pages/code-formatter'),
      },
      {
        path: '/doc-editor',
        lazy: () => import('@/pages/doc-editor/page'),
      },
      {
        path: '/excel',
        lazy: () => import('@/pages/excel/page'),
      },
      {
        path: '/format-conversion',
        lazy: () => import('@/pages/format-conversion/page'),
      },
      {
        path: '/generator/id',
        lazy: () => import('@/pages/generator/id/page'),
      },
      {
        path: '/generator/image',
        lazy: () => import('@/pages/generator/image/page'),
      },
      {
        path: '/generator/string',
        lazy: () => import('@/pages/generator/string/page'),
      },
      {
        path: '/hash',
        lazy: () => import('@/pages/hash/page'),
      },
      {
        path: '/json',
        children: [
          {
            index: true,
            lazy: () => import('@/pages/json/json-editor'),
          },
          {
            path: 'json-editor',
            lazy: () => import('@/pages/json/json-editor'),
          },
          {
            path: 'json-to-excel',
            lazy: () => import('@/pages/json/json-to-excel/page'),
          },
        ],
      },
      {
        path: '/markdown',
        lazy: () => import('@/pages/markdown'),
      },
      {
        path: '/qrcode',
        lazy: () => import('@/pages/qrcode/page'),
      },
      {
        path: '/timestamp',
        lazy: () => import('@/pages/timestamp/page'),
      },
      {
        path: '/tiptap',
        lazy: () => import('@/pages/tiptap/page'),
      },
      {
        path: '/totp',
        lazy: () => import('@/pages/totp/page'),
      },
      {
        path: '/url',
        lazy: () => import('@/pages/url/page'),
      },
      {
        path: '/writer',
        lazy: () => import('@/pages/writer/page'),
      },
      {
        path: '/transform',
        lazy: () => import('@/pages/transform'),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export default router;
