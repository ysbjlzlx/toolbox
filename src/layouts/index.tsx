import React, {FC} from 'react';
import {CssBaseline} from '@mui/material';

export default function Baselayout(props: any) {
  return (
    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <div>{props.children}</div>
      </React.Fragment>
    </React.StrictMode>
  );
}
