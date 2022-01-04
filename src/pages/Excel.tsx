import React from 'react';
import {Box, Container, Typography, Button} from '@mui/material';

import {styled} from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function Excel() {
  const onUpload = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <Container>
      <Box sx={{mt: 2}}>
        <Typography>Excel</Typography>
      </Box>
      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept=".xls,.xlsx,.csv"
            id="contained-button-file"
            multiple
            type="file"
            onChange={onUpload}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Box>
    </Container>
  );
}
