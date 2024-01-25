import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loading from '@/components/Loading';

import routes from '@/routes';

import '@/config/dayjs.ts';
import '@/locale';

import 'antd/dist/reset.css';
import './globals.css';
import './tailwind.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </StrictMode>,
);
