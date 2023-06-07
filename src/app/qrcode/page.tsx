'use client';

import { Container, Grid } from '@mui/material';
import { Input, QRCode } from 'antd';
import { ReactElement, useState } from 'react';

export default function Page(): ReactElement {
  const [text, setText] = useState<string>('');
  const { TextArea } = Input;

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <TextArea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            autoSize={{ minRows: 7, maxRows: 7 }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <QRCode value={text || ''} />
        </Grid>
      </Grid>
    </Container>
  );
}
