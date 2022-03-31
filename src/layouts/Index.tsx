import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Container>
        <NavBar />
      </Container>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
