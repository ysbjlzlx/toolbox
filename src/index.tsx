import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from '@mui/material';
import {Routes, Route, HashRouter} from 'react-router-dom';
import Json from './pages/Json';
import PageNotFound from './pages/PageNotFound';
import URL from './pages/URL';
import Markdown from './pages/Markdown';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <HashRouter basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route index element={<App />} />
          <Route path="json" element={<Json />} />
          <Route path="url" element={<URL />} />
          <Route path="markdown" element={<Markdown />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
