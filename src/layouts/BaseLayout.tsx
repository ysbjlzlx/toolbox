import type { MenuDataItem, ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import type { FC, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { menuData } from '@/layouts/defaultProps';
import { Outlet } from 'react-router-dom';

const settings: Partial<ProSettings> = {
  fixSiderbar: true,
  layout: 'side',
  splitMenus: false,
  navTheme: 'light',
  contentWidth: 'Fluid',
  colorPrimary: '#1677FF',
  siderMenuType: 'sub',
};

const menuItemRender = (item: MenuDataItem, dom: ReactNode) => {
  if (item.disabled || item.path === undefined) {
    return dom;
  }
  return <Link to={item.path}>{dom}</Link>;
};

const BaseLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onMenuHeaderClick = () => {
    navigate('/');
  };
  const proLayoutProps: ProLayoutProps = {
    logo: '/logo.svg',
    title: 'Toolbox',
    menuItemRender,
    onMenuHeaderClick,
    location: location,
    menu: {
      request: async () => {
        return menuData;
      },
    },
    token: {
      pageContainer: {
        colorBgPageContainer: '#ffffff',
        paddingInlinePageContainerContent: 0,
        paddingBlockPageContainerContent: 0,
      },
    },
  };

  return (
    <ProConfigProvider hashed={false}>
      <ConfigProvider>
        <ProLayout {...proLayoutProps} {...settings}>
          <div style={{ height: '100vh' }}>
            <Outlet />
          </div>
        </ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default BaseLayout;
