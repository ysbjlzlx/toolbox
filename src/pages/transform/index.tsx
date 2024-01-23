import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import type { FC } from 'react';

export const Component: FC = () => {
  return (
    <PageContainer title={false}>
      <div className="h-[calc(100dvh-56px)] p-4 md:h-dvh">
        <Card>ha</Card>
      </div>
    </PageContainer>
  );
};
