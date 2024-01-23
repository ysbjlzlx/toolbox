import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

import '@/config/dayjs.ts';
import '@/locale';

import Loading from '@/components/Loading';
import 'antd/dist/reset.css';
import './globals.css';
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </StrictMode>,
);
