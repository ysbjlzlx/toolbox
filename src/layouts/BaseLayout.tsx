import type { ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { MenuDataItem, ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { menuData as defaultProps } from './defaultProps';

const settings: Partial<ProSettings> = {
  fixSiderbar: true,
  layout: 'side',
  splitMenus: false,
  navTheme: 'light',
  contentWidth: 'Fluid',
  colorPrimary: '#1677FF',
  siderMenuType: 'sub',
};

const BaseLayout: FC = () => {
  const location = useLocation();

  const menuHeaderRender = (logo: ReactNode, title: ReactNode) => (
    <a href="/" title="Logo">
      {logo}
      {title}
    </a>
  );
  const menuItemRender = (item: MenuDataItem, dom: ReactNode) => {
    if (item.disabled || item.path === undefined) {
      return dom;
    }
    return <Link to={item.path}>{dom}</Link>;
  };

  const proLayoutProps: ProLayoutProps = {
    logo: '/logo.svg',
    title: 'Toolbox',
    menuHeaderRender,
    menuItemRender,
    location: location,
    route: defaultProps,
    token: {
      pageContainer: {
        colorBgPageContainer: '#ffffff',
        paddingInlinePageContainerContent: 10,
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
