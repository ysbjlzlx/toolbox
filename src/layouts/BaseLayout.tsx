'use client';

import type { ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { MenuDataItem, ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

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

const menuItemRender = (item: MenuDataItem, dom: ReactNode) => {
  if (item.disabled || item.path === undefined) {
    return dom;
  }
  return (
    <Link href={item.path} prefetch={false}>
      {dom}
    </Link>
  );
};

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const menuHeaderRender = (logo: ReactNode, title: ReactNode) => (
    <Link href={'/'} title={'logo'} prefetch={false}>
      {logo}
      {title}
    </Link>
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
          <div style={{ height: '100vh' }}>{children}</div>
        </ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default BaseLayout;
