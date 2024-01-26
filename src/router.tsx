import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/components/NotFound';
import BaseLayout from '@/layouts/BaseLayout.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    lazy: () => import('@/pages/page.tsx'),
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/base64',
        lazy: () => import('@/pages/base64/page.tsx'),
      },
      {
        path: '/code-formatter',
        lazy: () => import('@/pages/code-formatter'),
      },
      {
        path: '/doc-editor',
        lazy: () => import('@/pages/doc-editor/page.tsx'),
      },
      {
        path: '/excel',
        lazy: () => import('@/pages/excel/page.tsx'),
      },
      {
        path: '/format-conversion',
        lazy: () => import('@/pages/format-conversion/page.tsx'),
      },
      {
        path: '/generator/id',
        lazy: () => import('@/pages/generator/id/page.tsx'),
      },
      {
        path: '/generator/image',
        lazy: () => import('@/pages/generator/image/page.tsx'),
      },
      {
        path: '/generator/string',
        lazy: () => import('@/pages/generator/string/page.tsx'),
      },
      {
        path: '/hash',
        lazy: () => import('@/pages/hash/page.tsx'),
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
            lazy: () => import('@/pages/json/json-to-excel/page.tsx'),
          },
        ],
      },
      {
        path: '/markdown',
        lazy: () => import('@/pages/markdown'),
      },
      {
        path: '/qrcode',
        lazy: () => import('@/pages/qrcode/page.tsx'),
      },
      {
        path: '/timestamp',
        lazy: () => import('@/pages/timestamp/page.tsx'),
      },
      {
        path: '/tiptap',
        lazy: () => import('@/pages/tiptap/page.tsx'),
      },
      {
        path: '/totp',
        lazy: () => import('@/pages/totp/page.tsx'),
      },
      {
        path: '/url',
        lazy: () => import('@/pages/url/page.tsx'),
      },
      {
        path: '/writer',
        lazy: () => import('@/pages/writer/page.tsx'),
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
