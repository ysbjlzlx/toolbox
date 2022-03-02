import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import ContentCopyAdornment from '../compontents/ContentCopyAdornment';
import ContentCopyButton from '../compontents/ContentCopyButton';

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
          type={'text'}
          label={'URL'}
          value={uri}
          onChange={(e) => {
            setUri(e.target.value);
          }}
          multiline
          minRows={3}
          variant={'outlined'}
          fullWidth
          InputProps={{
            endAdornment: <ContentCopyAdornment content={uri} />,
          }}
        />
      </Box>
      <Box mt={2}>
        <ButtonGroup>
          <Button variant={'outlined'} onClick={handleEncodeURI}>
            链接参数编码
          </Button>
          <Button variant={'outlined'} onClick={handleEncodeURIComponent}>
            全链接编码
          </Button>
          <Button variant={'outlined'} onClick={handleDecodeURIComponent}>
            链接解码
          </Button>
        </ButtonGroup>
      </Box>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography sx={{ wordWrap: 'break-word', paddingTop: 2, pb: 2 }}>
              {encodedURI}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ContentCopyButton text={encodedURI} />
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
