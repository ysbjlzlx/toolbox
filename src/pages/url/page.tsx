import { useState } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import TextResultBox from '../../components/TextResultBox.tsx';

export default function Page() {
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
    <PageContainer title={false} className="max-w-screen-lg mx-auto pt-4">
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
        <Button.Group>
          <Button onClick={handleEncodeURI}>链接参数编码</Button>
          <Button onClick={handleEncodeURIComponent}>全链接编码</Button>
          <Button onClick={handleDecodeURIComponent}>链接解码</Button>
        </Button.Group>
      </div>
      <div className="mt-4">
        <TextResultBox title="结果" text={encodedURI} />
      </div>
    </PageContainer>
  );
}
