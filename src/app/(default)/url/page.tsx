'use client';

import { Box, Container } from '@mui/system';
import { useState } from 'react';

import { Button, Input } from 'antd';
import TextResultBox from '../../../components/TextResultBox';

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
    <Container>
      <Box mt={2}>
        <Input.TextArea
          rows={3}
          value={uri}
          placeholder={'URL'}
          onChange={(e) => {
            setUri(e.target.value);
          }}
        />
      </Box>
      <Box mt={2}>
        <Button.Group>
          <Button onClick={handleEncodeURI}>链接参数编码</Button>
          <Button onClick={handleEncodeURIComponent}>全链接编码</Button>
          <Button onClick={handleDecodeURIComponent}>链接解码</Button>
        </Button.Group>
      </Box>
      <Box mt={2}>
        <TextResultBox title="结果" text={encodedURI} />
      </Box>
    </Container>
  );
}
