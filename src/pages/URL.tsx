import React, {useState} from 'react';
import {Box, Container, TextField} from '@mui/material';

export default function URL() {
  const [url, setUrl] = useState<String>();
  const [encodedUrl, setEncodedUrl] = useState<String>();

  const handleURLChange = (event: any) => {
    setUrl(event.target.value);
    console.log(event);
  };

  const handleEncodedURLChange = (event: any) => {
    setEncodedUrl(event.target.value);
  };

  return (
    <Container>
      <Box mt={2}>
        <TextField
          type={'text'}
          label={'URL'}
          value={url}
          onChange={handleURLChange}
          multiline
          rows={3}
          variant={'outlined'}
          fullWidth
        />
      </Box>

      <Box mt={2}>
        <TextField
          type={'text'}
          label={'encodeURL'}
          value={encodedUrl}
          onChange={handleEncodedURLChange}
          multiline
          rows={3}
          variant={'outlined'}
          fullWidth
        />
      </Box>
    </Container>
  );
}
