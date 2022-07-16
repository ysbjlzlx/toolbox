import { FC, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './next-layout.css';

import { apps } from '../models/Apps';

const NextLayout: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerWidth, setDrawerWidth] = useState<number>(200);
  useEffect(() => {
    if (matches) {
      setDrawerWidth(200);
    } else {
      setDrawerWidth(0);
    }
  }, [matches]);

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Drawer
        open={matches}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ flexGrow: 1, backgroundColor: 'background.paper' }}>
          <List>
            {apps.map((app) => {
              return (
                <ListItem disablePadding key={app.name}>
                  <ListItemButton component={NavLink} to={app.href}>
                    <ListItemText primary={app.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default NextLayout;
