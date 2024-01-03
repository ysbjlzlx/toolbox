import { ThemeProvider, createTheme } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

import '@/config/dayjs.ts';
import '@/locale';

import 'antd/dist/reset.css';
import './globals.css';
import './tailwind.css';

const theme = createTheme({
  spacing: 8,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
