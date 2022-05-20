import React from 'react';
import { Container, TextField } from '@mui/material';

export default function Markdown() {
  return (
    <Container sx={{ mt: 2 }}>
      <TextField type={'text'} minRows={5} maxRows={10} multiline fullWidth />
    </Container>
  );
}
