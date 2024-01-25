import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Input, Space } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

import TextResultBox from '../../components/TextResultBox.tsx';

export const Component: FC = () => {
  const [uri, setUri] = useState<string>('');
  const [encodedURI, setEncodedURI] = useState<string>('');

  const handleEncodeURI = function () {
    setEncodedURI(encodeURI(uri));
  };

  const handleEncodeURIComponent = function () {
    setEncodedURI(encodeURIComponent(uri));
  };

  const handleDecodeURIComponent = function () {
    setEncodedURI(decodeURIComponent(uri));
  };

  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg px-4 pt-4">
      <Card>
        <div>
          <Input.TextArea
            rows={3}
            value={uri}
            placeholder="URL"
            onChange={(e) => {
              setUri(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          <Space.Compact>
            <Button onClick={handleEncodeURI}>链接参数编码</Button>
            <Button onClick={handleEncodeURIComponent}>全链接编码</Button>
            <Button onClick={handleDecodeURIComponent}>链接解码</Button>
          </Space.Compact>
        </div>
        <div className="mt-4">
          <TextResultBox title="结果" text={encodedURI} />
        </div>
      </Card>
    </PageContainer>
  );
};
