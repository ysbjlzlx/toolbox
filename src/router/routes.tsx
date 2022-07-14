import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import NextLayout from '../layouts/NextLayout';
import Loading from '../pages/Loading';

const App = lazy(() => import('../pages/App'));
const JSON = lazy(() => import('../pages/JSON'));
const URL = lazy(() => import('../pages/URL'));
const Markdown = lazy(() => import('../pages/Markdown'));
const Random = lazy(() => import('../pages/Random'));
const Base64 = lazy(() => import('../pages/Base64'));
const Excel = lazy(() => import('../pages/Excel'));
const Hash = lazy(() => import('../pages/Hash'));
const QRCode = lazy(() => import('../pages/QrCode'));
const CodeFormatter = lazy(() => import('../pages/CodeFormatter'));
const Code = lazy(() => import('../pages/Code'));
const JSON2Yaml = lazy(() => import('../pages/JSON2Yaml'));
const Placeholder = lazy(() => import('../pages/Placeholder'));
const BSONObjectID = lazy(() => import('../pages/BSONObjectID'));

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Suspense fallback={<Loading />} children={<App />} />,
  },
  {
    path: '/',
    element: <NextLayout />,
    children: [
      { path: '/json', element: <Suspense fallback={<Loading />} children={<JSON />} /> },
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
      { path: '/code', element: <Suspense fallback={<Loading />} children={<Code />} /> },
      {
        path: '/json2yaml',
        element: <Suspense fallback={<Loading />} children={<JSON2Yaml />} />,
      },
      {
        path: '/placeholder',
        element: <Suspense fallback={<Loading />} children={<Placeholder />} />,
      },
      {
        path: '/bson-objectid',
        element: <Suspense fallback={<Loading />} children={<BSONObjectID />} />,
      },
    ],
  },
];
export default routes;
