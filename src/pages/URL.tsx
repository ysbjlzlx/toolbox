import React, {useState} from 'react';
import {Container, Input, TextField} from '@mui/material';

export default function URL() {
  const [url, setUrl] = useState<String>();
  const [encodedUrl, setEncodeUrl] = useState<String>();

  const handleURLChange = (event: any) => {
    setUrl(event.target.value);
    console.log(event);
  };

  return (
    <Container>
      <TextField
        type={'text'}
        value={url}
        onChange={handleURLChange}
        multiline
        rows={3}
      />
      <TextField type={'text'} value={encodedUrl} multiline rows={3} />
    </Container>
  );
}
