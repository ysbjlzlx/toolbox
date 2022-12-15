import ProCard from '@ant-design/pro-card';
import type { ProSettings } from '@ant-design/pro-layout';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { Button } from 'antd';
import { useState } from 'react';
import * as defaultProps from './defaultProps';

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'side',
    splitMenus: false,
    navTheme: 'light',
    contentWidth: 'Fluid',
    colorPrimary: '#1677FF',
    siderMenuType: 'sub',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const [num, setNum] = useState(40);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname,
          }}
          menu={{
            collapsedShowGroupTitle: true,
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          onMenuHeaderClick={(e: any) => console.log(e)}
          {...settings}
        >
          <PageContainer
            token={{
              paddingInlinePageContainerContent: num,
            }}
            extra={[
              <Button key="3">操作</Button>,
              <Button key="2">操作</Button>,
              <Button
                key="1"
                type="primary"
                onClick={() => {
                  setNum(num > 0 ? 0 : 40);
                }}
              >
                主操作
              </Button>,
            ]}
            subTitle="简单的描述"
            footer={[
              <Button key="3">重置</Button>,
              <Button key="2" type="primary">
                提交
              </Button>,
            ]}
          >
            <ProCard
              style={{
                height: '200vh',
                minHeight: 800,
              }}
            >
              <div />
            </ProCard>
          </PageContainer>
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
