import { PageContainer } from '@ant-design/pro-components';
import { Card, Input, QRCode } from 'antd';
import type { ReactElement } from 'react';
import { useState } from 'react';

export default function Page(): ReactElement {
  const [text, setText] = useState<string>('');
  const { TextArea } = Input;

  return (
    <PageContainer title={false} className="px-4 pt-4">
      <Card className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="sm:col-span-3">
            <TextArea
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              autoSize={{ minRows: 7, maxRows: 7 }}
            />
          </div>
          <div className="sm:col-span-1">
            <QRCode value={text || 'toolbox.fanfou.dev'} className="h-full w-full" />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
}
