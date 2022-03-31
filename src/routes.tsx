import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layouts/Index';

import Loading from './pages/Loading';

const App = lazy(() => import('./pages/App'));
const Json = lazy(() => import('./pages/Json'));
const URL = lazy(() => import('./pages/URL'));
const Markdown = lazy(() => import('./pages/Markdown'));
const Random = lazy(() => import('./pages/Random'));
const Base64 = lazy(() => import('./pages/Base64'));
const Excel = lazy(() => import('./pages/Excel'));
const Hash = lazy(() => import('./pages/Hash'));
const QRCode = lazy(() => import('./pages/QrCode'));
const CodeFormatter = lazy(() => import('./pages/CodeFormatter'));

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      index: true,
      element: <Suspense fallback={<Loading />} children={<App />} />,
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/json', element: <Suspense fallback={<Loading />} children={<Json />} /> },
        { path: '/url', element: <Suspense fallback={<Loading />} children={<URL />} /> },
        { path: '/markdown', element: <Suspense fallback={<Loading />} children={<Markdown />} /> },
        { path: '/random', element: <Suspense fallback={<Loading />} children={<Random />} /> },
        { path: '/base64', element: <Suspense fallback={<Loading />} children={<Base64 />} /> },
        { path: '/excel', element: <Suspense fallback={<Loading />} children={<Excel />} /> },
        { path: '/hash', element: <Suspense fallback={<Loading />} children={<Hash />} /> },
        { path: '/qrcode', element: <Suspense fallback={<Loading />} children={<QRCode />} /> },
        {
          path: '/code-formatter',
          element: <Suspense fallback={<Loading />} children={<CodeFormatter />} />,
        },
      ],
    },
  ]);
}
