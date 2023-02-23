import type { ProSettings } from '@ant-design/pro-layout';
import { ProLayout } from '@ant-design/pro-layout';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { route as defaultProps } from './defaultProps';

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
          route={defaultProps}
          location={{ pathname }}
          menu={{ collapsedShowGroupTitle: true }}
          {...settings}
          /* eslint-disable-next-line react/no-unstable-nested-components */
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                navigate(item.path || '/welcome');
                setPathname(item.path || '/welcome');
              }}
            >
              {dom}
            </div>
          )}
          token={{
            pageContainer: {
              colorBgPageContainer: '#ffffff',
              paddingInlinePageContainerContent: 0,
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
