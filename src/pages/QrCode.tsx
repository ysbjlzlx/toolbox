import React, {ReactElement, useRef, useEffect, useState} from 'react';
import {Box, Container, Grid, Stack, TextField} from '@mui/material';
import QRCode from 'qrcode';

export default function QrCode(): ReactElement {
  const [text, setText] = useState<string>('');
  const qrcodeContainer = useRef<HTMLCanvasElement>(null);
  const divContainer = useRef<HTMLDivElement>(null);
  const options = {
    width: qrcodeContainer.current?.width,
  };
  useEffect(() => {
    if (!text || text === '') {
      return;
    }
    options.width = divContainer.current?.offsetWidth;
    QRCode.toCanvas(qrcodeContainer.current, text, options);
  }, [text]);

  return (
    <Container sx={{mt: 5}}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <TextField
            label={'文本'}
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
            rows={9}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3} ref={divContainer}>
          <canvas ref={qrcodeContainer} />
        </Grid>
      </Grid>
    </Container>
  );
}
