import type { FC } from 'react';
import React, { useEffect } from 'react';
import Vditor from 'vditor';

import { PageContainer } from '@ant-design/pro-components';
import 'vditor/dist/index.css';

const Markdown: FC = () => {
  const [, setVd] = React.useState<Vditor>();

  useEffect(() => {
    const vditor = new Vditor('vditor', {
      height: '100vh',
      after: () => {
        vditor.setValue('`Vditor` 最小代码示例');
        setVd(vditor);
      },
    });
  }, []);
  return (
    <PageContainer title={false} token={{ paddingInlinePageContainerContent: 0 }}>
      <div id="vditor" className="vditor" />
    </PageContainer>
  );
};

export default Markdown;
