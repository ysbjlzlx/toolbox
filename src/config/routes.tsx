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
const Placeholder = lazy(() => import('../pages/PlaceholderImg'));
const BSONObjectID = lazy(() => import('../pages/bson/BsonObjectId'));
const DocEditor = lazy(() => import('../pages/DocEditor'));
const Timestamp = lazy(() => import('../pages/Timestamp'));
const Totp = lazy(() => import('../pages/totp'));
const Writer = lazy(() => import('../pages/Writer'));
const Formatter = lazy(() => import('../pages/formatter'));

const JsonEditor = lazy(() => import('../pages/json/JsonEditor'));
const JsonToYaml = lazy(() => import('../pages/json/JsonToYaml'));
const JsonToExcel = lazy(() => import('../pages/json/JsonToExcel'));
const Yaml = lazy(() => import('../pages/yaml/Yaml'));
const Bson = lazy(() => import('../pages/bson/Bson'));

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
    path: '/json',
    element: <NextLayout />,
    children: [
      {
        path: 'json-editor',
        element: (
          <Suspense fallback={<Loading />}>
            <JsonEditor />
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
    path: '/',
    element: <NextLayout />,
    children: [
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
        path: '/bson',
        element: (
          <Suspense fallback={<Loading />}>
            <Bson />
          </Suspense>
        ),
      },
      {
        path: '/bson-object-id',
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
];
export default routes;
