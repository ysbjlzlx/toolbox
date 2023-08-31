import type { FC, LazyExoticComponent } from 'react';
import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import BaseLayout from '@/layouts/BaseLayout.tsx';

/* eslint-disable react-refresh/only-export-components */
const Index = lazy(() => import('@/pages/page'));
const Base64 = lazy(() => import('@/pages/base64/page'));
const CodeFormatter = lazy(() => import('@/pages/code-formatter/page'));
const DocEditor = lazy(() => import('@/pages/doc-editor/page'));
const Excel = lazy(() => import('@/pages/excel/page'));
const GeneratorId = lazy(() => import('@/pages/generator/id/page'));
const GeneratorImage = lazy(() => import('@/pages/generator/image/page'));
const GeneratorString = lazy(() => import('@/pages/generator/string/page'));
const Hash = lazy(() => import('@/pages/hash/page'));
const JsonEditor = lazy(() => import('@/pages/json/json-editor'));
const JsonToExcel = lazy(() => import('@/pages/json/json-to-excel/page'));
const JsonToYaml = lazy(() => import('@/pages/json/json-to-yaml/page'));
const Markdown = lazy(() => import('@/pages/markdown/page'));
const NextMarkdown = lazy(() => import('@/pages/markdown'));
const Qrcode = lazy(() => import('@/pages/qrcode/page'));
const Timestamp = lazy(() => import('@/pages/timestamp/page'));
const Totp = lazy(() => import('@/pages/totp/page'));
const Url = lazy(() => import('@/pages/url/page'));
const Writer = lazy(() => import('@/pages/writer/page'));
const Yaml = lazy(() => import('@/pages/yaml/page'));
/* eslint-enable react-refresh/only-export-components */

const lazyLoad = (Component: LazyExoticComponent<FC>) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: lazyLoad(Index),
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/base64',
        element: lazyLoad(Base64),
      },
      {
        path: '/code-formatter',
        element: lazyLoad(CodeFormatter),
      },
      {
        path: '/doc-editor',
        element: lazyLoad(DocEditor),
      },
      {
        path: '/excel',
        element: lazyLoad(Excel),
      },
      {
        path: '/generator/id',
        element: lazyLoad(GeneratorId),
      },
      {
        path: '/generator/image',
        element: lazyLoad(GeneratorImage),
      },
      {
        path: '/generator/string',
        element: lazyLoad(GeneratorString),
      },
      {
        path: '/hash',
        element: lazyLoad(Hash),
      },
      {
        path: '/json/json-editor',
        element: lazyLoad(JsonEditor),
      },
      {
        path: '/json/json-to-excel',
        element: lazyLoad(JsonToExcel),
      },
      {
        path: '/json/json-to-yaml',
        element: lazyLoad(JsonToYaml),
      },
      {
        path: '/markdown',
        element: lazyLoad(Markdown),
      },
      {
        path: '/markdown/next',
        element: lazyLoad(NextMarkdown),
      },
      {
        path: '/qrcode',
        element: lazyLoad(Qrcode),
      },
      {
        path: '/timestamp',
        element: lazyLoad(Timestamp),
      },
      {
        path: '/totp',
        element: lazyLoad(Totp),
      },
      {
        path: '/url',
        element: lazyLoad(Url),
      },
      {
        path: '/writer',
        element: lazyLoad(Writer),
      },
      {
        path: '/yaml',
        element: lazyLoad(Yaml),
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
