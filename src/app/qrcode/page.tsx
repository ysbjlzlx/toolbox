import { Container, Grid, TextField } from '@mui/material';
import QRCode from 'qrcode';
import { ReactElement, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

export default function Page(): ReactElement {
  const [text, setText] = useState<string>('');
  const qrcodeContainer = useRef<HTMLCanvasElement>(null);
  const divContainer = useRef<HTMLDivElement>(null);

  const options = useMemo(() => {
    return { width: 128 };
  }, []);
  useLayoutEffect(() => {
    options.width = divContainer.current?.offsetWidth || 128;
  }, [options]);

  useEffect(() => {
    if (!text || text === '') {
      return;
    }
    QRCode.toCanvas(qrcodeContainer.current, text, options);
  }, [text, options]);

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <TextField
            label="文本"
            value={text}
            onChange={(event) => {
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
