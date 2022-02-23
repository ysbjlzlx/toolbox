import React, {FC} from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const BaseLayout: FC = ({children}) => {
  return (
    <React.StrictMode>
      <CssBaseline children={children} />
    </React.StrictMode>
  );
};

export default BaseLayout;
