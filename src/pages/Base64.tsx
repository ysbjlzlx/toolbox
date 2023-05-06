import { Box, Container } from '@mui/material';
import { Button, Input, Space } from 'antd';
import { enc } from 'crypto-js';
import { useState } from 'react';
import TextResultBox from '../components/TextResultBox';

export default function Base64() {
  const [plain, setPlain] = useState('');
  const [target, setTarget] = useState('');
  const encode = () => {
    const str = enc.Base64.stringify(enc.Utf8.parse(plain));
    setTarget(str);
  };
  const decode = () => {
    const str = enc.Utf8.stringify(enc.Base64.parse(plain));
    setTarget(str);
  };
  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Input.TextArea
          value={plain}
          onChange={(event) => {
            setPlain(event.target.value);
          }}
          placeholder="文本"
          autoSize={{ minRows: 5, maxRows: 10 }}
          showCount
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Space.Compact>
          <Button onClick={encode}>编码</Button>
          <Button onClick={decode}>解码</Button>
        </Space.Compact>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextResultBox title="结果" text={target} />
      </Box>
    </Container>
  );
}
