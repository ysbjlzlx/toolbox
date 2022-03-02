import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'mobx-react';

import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import stores from './models/stores';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Provider {...stores}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
