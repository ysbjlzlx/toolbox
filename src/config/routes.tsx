import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import NextLayout from '../layouts/NextLayout';
import Loading from '../pages/Loading';

const App = lazy(() => import('../pages/App'));
const URL = lazy(() => import('../pages/URL'));
const Markdown = lazy(() => import('../pages/Markdown'));
const Random = lazy(() => import('../pages/Random'));
const Base64 = lazy(() => import('../pages/Base64'));
const Excel = lazy(() => import('../pages/Excel'));
const Hash = lazy(() => import('../pages/Hash'));
const QRCode = lazy(() => import('../pages/QrCode'));
const CodeFormatter = lazy(() => import('../pages/CodeFormatter'));
const Code = lazy(() => import('../pages/code'));
const JSON2Yaml = lazy(() => import('../pages/json/JsonToYaml'));
const Placeholder = lazy(() => import('../pages/PlaceholderImg'));
const BSONObjectID = lazy(() => import('../pages/BSONObjectID'));
const DocEditor = lazy(() => import('../pages/DocEditor'));
const Timestamp = lazy(() => import('../pages/Timestamp'));
const Totp = lazy(() => import('../pages/totp'));
const Json = lazy(() => import('../pages/json/index'));

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <NextLayout />,
    children: [
      {
        path: '/json',
        element: (
          <Suspense fallback={<Loading />}>
            <Json />
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
            <CodeFormatter />
          </Suspense>
        ),
      },
      {
        path: '/code',
        element: (
          <Suspense fallback={<Loading />}>
            <Code />
          </Suspense>
        ),
      },
      {
        path: '/json2yaml',
        element: (
          <Suspense fallback={<Loading />}>
            <JSON2Yaml />
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
        path: '/bson-objectid',
        element: (
          <Suspense fallback={<Loading />}>
            <BSONObjectID />
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
    ],
  },
];
export default routes;
