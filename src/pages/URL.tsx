import { Box, Container, TextField } from '@mui/material';
import { useState } from 'react';

import { Button } from 'antd';
import ContentCopyAdornment from '../components/ContentCopyAdornment';
import TextResultBox from '../components/TextResultBox';

export default function URL() {
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
        <TextField
          type="text"
          label="URL"
          value={uri}
          onChange={(e) => {
            setUri(e.target.value);
          }}
          multiline
          minRows={3}
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: <ContentCopyAdornment content={uri} />,
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
