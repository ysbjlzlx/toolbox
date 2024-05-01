import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Loading from '@/components/Loading';

import router from '@/router.tsx';

import '@/i18n';

import 'antd/dist/reset.css';
import './globals.css';
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </StrictMode>,
);
