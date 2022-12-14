import { Layout, Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { FC, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { apps } from '../models/Apps';
import './next-layout.css';

const NextLayout: FC = () => {
  const [keyPath, setKeyPath] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  useLayoutEffect(() => {
    console.log(location.pathname);
    setKeyPath([location.pathname]);
  }, [location]);

  const items = (): ItemType[] => {
    const items: ItemType[] = [];
    apps.forEach((app) => {
      // @ts-ignore
      items.push({ label: app.name, key: app.href, icon: null });
    });

    return items;
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Sider collapsible={true}>
        <Menu
          items={items()}
          mode="inline"
          theme="dark"
          selectedKeys={keyPath}
          onClick={(e) => {
            navigate(e.key);
            console.log(e);
          }}
        />
      </Layout.Sider>
      <Layout.Content style={{ backgroundColor: 'white', height: '100%' }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default NextLayout;
