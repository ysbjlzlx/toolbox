import React, {useState, useEffect} from 'react';
import {Box, Container, TextField} from '@mui/material';

import ContentCopyAdornment from '../compontents/ContentCopyAdornment';

export default function URL() {
  const [uri, setUri] = useState<string>();
  const [encodedURI, setEncodedURI] = useState<string>();
  const [encodedURIComponent, setEncodedURIComponent] = useState<string>();

  useEffect(() => {
    if (uri) {
      setEncodedURI(encodeURI(uri));
      setEncodedURIComponent(encodeURIComponent(uri));
    }
  }, [uri]);

  return (
    <Container>
      <Box mt={2}>
        <TextField
          type={'text'}
          label={'URL'}
          value={uri}
          onChange={e => {
            setUri(e.target.value);
          }}
          multiline
          rows={3}
          variant={'outlined'}
          fullWidth
          InputProps={{
            endAdornment: <ContentCopyAdornment content={uri} />,
          }}
        />
      </Box>

      <Box mt={2}>
        <TextField
          type={'text'}
          label={'encodeURI'}
          value={encodedURI}
          onChange={e => {
            setEncodedURI(e.target.value);
          }}
          multiline
          rows={3}
          variant={'outlined'}
          fullWidth
        />
      </Box>
      <Box mt={2}>
        <TextField
          type={'text'}
          label={'encodeURIComponent'}
          value={encodedURIComponent}
          onChange={e => {
            setEncodedURIComponent(e.target.value);
          }}
          multiline
          rows={3}
          variant={'outlined'}
          fullWidth
        />
      </Box>
    </Container>
  );
}
