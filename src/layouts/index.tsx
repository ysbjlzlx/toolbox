import React, {FC} from 'react';
import {Box, CssBaseline} from '@mui/material';

const BaseLayout: FC = ({children}) => {
  return (
    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <Box>{children}</Box>
      </React.Fragment>
    </React.StrictMode>
  );
};

export default BaseLayout;
