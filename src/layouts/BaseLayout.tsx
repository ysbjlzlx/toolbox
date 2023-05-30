import type { ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { MenuDataItem, ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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

const BaseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const menuHeaderRender = (logo: ReactNode, title: ReactNode) => (
    <a href="/" title="Logo">
      {logo}
      {title}
    </a>
  );
  const menuItemRender = (item: MenuDataItem, dom: ReactNode) => (
    <div
      onClick={() => {
        if (item.disabled !== true) {
          navigate(item.path || '/welcome');
          setPathname(item.path || '/welcome');
        }
      }}
    >
      {dom}
    </div>
  );

  const proLayoutProps: ProLayoutProps = {
    logo: '/logo.svg',
    title: 'Toolbox',
    menuHeaderRender,
    menuItemRender,
    location: { pathname },
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
