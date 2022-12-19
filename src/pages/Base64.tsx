import { Box, Button, ButtonGroup, Container, TextField } from '@mui/material';
import { Input } from 'antd';
import { enc } from 'crypto-js';
import { useState } from 'react';
import ContentCopyAdornment from '../components/ContentCopyAdornment';

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
        <ButtonGroup>
          <Button onClick={encode}>编码</Button>
          <Button onClick={decode}>解码</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="结果"
          value={target}
          fullWidth
          multiline
          minRows={5}
          maxRows={10}
          InputProps={{
            endAdornment: <ContentCopyAdornment content={target} />,
          }}
        />
      </Box>
    </Container>
  );
}
