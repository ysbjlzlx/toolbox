import type { ProSettings } from '@ant-design/pro-components';
import { MenuDataItem, ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ReactNode, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { menuData as defaultProps } from './defaultProps';

const NextLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [settings, setSetting] = useState<Partial<ProSettings>>({
    fixSiderbar: true,
    layout: 'side',
    splitMenus: false,
    navTheme: 'light',
    contentWidth: 'Fluid',
    colorPrimary: '#1677FF',
    siderMenuType: 'sub',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          logo="/logo.svg"
          title="Toolbox"
          /* eslint-disable-next-line react/no-unstable-nested-components */
          menuHeaderRender={(logo: ReactNode, title: ReactNode) => (
            <div
              id="customize_menu_header"
              style={{
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onClick={() => {
                window.open('/', '_self');
              }}
            >
              {logo}
              {title}
            </div>
          )}
          route={defaultProps}
          location={{ pathname }}
          menu={{ collapsedShowGroupTitle: true }}
          {...settings}
          /* eslint-disable-next-line react/no-unstable-nested-components */
          menuItemRender={(item: MenuDataItem, dom: ReactNode) => (
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
          )}
          token={{
            pageContainer: {
              colorBgPageContainer: '#ffffff',
              paddingInlinePageContainerContent: 10,
              paddingBlockPageContainerContent: 0,
            },
          }}
        >
          <div style={{ height: '100vh' }}>
            <Outlet />
          </div>
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
export default NextLayout;
