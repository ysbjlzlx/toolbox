import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import Loading from '../app/loading';
import NotFound from '../app/not-found';
import BaseLayout from '../layouts/BaseLayout';

const App = lazy(() => import('../app/page'));
const URL = lazy(() => import('../app/url/page'));
const Markdown = lazy(() => import('../app/markdown/page'));
const Random = lazy(() => import('../app/random/page'));
const Base64 = lazy(() => import('../app/base64/page'));
const Excel = lazy(() => import('../app/excel/page'));
const Hash = lazy(() => import('../app/hash/page'));
const QRCode = lazy(() => import('../app/qrcode/page'));
const Placeholder = lazy(() => import('../app/placeholder/page'));
const DocEditor = lazy(() => import('../app/doc-editor/page'));
const Timestamp = lazy(() => import('../app/timestamp/page'));
const Totp = lazy(() => import('../app/totp/page'));
const Writer = lazy(() => import('../app/writer/page'));
const Formatter = lazy(() => import('../app/code-formatter/page'));

const Json = lazy(() => import('../app/json/json-editor/page'));
const JsonToYaml = lazy(() => import('../app/json/json-to-yaml/JsonToYaml'));
const JsonToExcel = lazy(() => import('../app/json/json-to-excel/JsonToExcel'));
const Yaml = lazy(() => import('../app/yaml/page'));
const IdPage = lazy(() => import('../app/generator/id/page'));

const routes: RouteObject[] = [
  {
    path: '/json',
    element: <BaseLayout />,
    children: [
      {
        path: 'json-editor',
        element: (
          <Suspense fallback={<Loading />}>
            <Json />
          </Suspense>
        ),
      },
      {
        path: 'json-to-yaml',
        element: (
          <Suspense fallback={<Loading />}>
            <JsonToYaml />
          </Suspense>
        ),
      },
      {
        path: 'json-to-excel',
        element: (
          <Suspense fallback={<Loading />}>
            <JsonToExcel />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/generator',
    element: <BaseLayout />,
    children: [
      {
        path: '/generator/id',
        element: (
          <Suspense fallback={<Loading />}>
            <IdPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: '/yaml',
        element: (
          <Suspense fallback={<Loading />}>
            <Yaml />
          </Suspense>
        ),
      },
      {
        path: '/url',
        element: (
          <Suspense fallback={<Loading />}>
            <URL />
          </Suspense>
        ),
      },
      {
        path: '/markdown',
        element: (
          <Suspense fallback={<Loading />}>
            <Markdown />
          </Suspense>
        ),
      },
      {
        path: '/random',
        element: (
          <Suspense fallback={<Loading />}>
            <Random />
          </Suspense>
        ),
      },
      {
        path: '/base64',
        element: (
          <Suspense fallback={<Loading />}>
            <Base64 />
          </Suspense>
        ),
      },
      {
        path: '/excel',
        element: (
          <Suspense fallback={<Loading />}>
            <Excel />
          </Suspense>
        ),
      },
      {
        path: '/hash',
        element: (
          <Suspense fallback={<Loading />}>
            <Hash />
          </Suspense>
        ),
      },
      {
        path: '/qrcode',
        element: (
          <Suspense fallback={<Loading />}>
            <QRCode />
          </Suspense>
        ),
      },
      {
        path: '/code-formatter',
        element: (
          <Suspense fallback={<Loading />}>
            <Formatter />
          </Suspense>
        ),
      },
      {
        path: '/placeholder',
        element: (
          <Suspense fallback={<Loading />}>
            <Placeholder />
          </Suspense>
        ),
      },
      {
        path: '/doc-editor',
        element: (
          <Suspense fallback={<Loading />}>
            <DocEditor />
          </Suspense>
        ),
      },
      {
        path: '/timestamp',
        element: (
          <Suspense fallback={<Loading />}>
            <Timestamp />
          </Suspense>
        ),
      },
      {
        path: '/totp',
        element: (
          <Suspense fallback={<Loading />}>
            <Totp />
          </Suspense>
        ),
      },
      {
        path: '/writer',
        element: (
          <Suspense fallback={<Loading />}>
            <Writer />
          </Suspense>
        ),
      },
      {
        path: '/formatter',
        element: (
          <Suspense fallback={<Loading />}>
            <Formatter />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
];
export default routes;
