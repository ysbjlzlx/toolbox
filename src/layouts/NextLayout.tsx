import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { apps } from '../models/Apps';
import './next-layout.css';

const NextLayout: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerWidth, setDrawerWidth] = useState<number>(200);
  const [keyPath, setKeyPath] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  useLayoutEffect(() => {
    console.log(location.pathname);
    setKeyPath([location.pathname]);
  }, [location]);
  useEffect(() => {
    if (matches) {
      setDrawerWidth(200);
    } else {
      setDrawerWidth(0);
    }
  }, [matches]);

  const items = (): ItemType[] => {
    const items: ItemType[] = [];
    apps.forEach((app) => {
      items.push({ label: app.name, key: app.href });
    });

    return items;
  };

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
        <Menu
          items={items()}
          mode="inline"
          selectedKeys={keyPath}
          onClick={(e) => {
            navigate(e.key);
            console.log(e);
          }}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default NextLayout;
