import React from 'react';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
} from '@mui/material';

import {Block} from '../compontents/Block';

export default function Random() {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}};

  return (
    <Container>
      <Block sx={{mt: 2}}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label={'数字'}
          />
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label={'大写字母'}
          />
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label={'小写字母'}
          />
          <FormControlLabel control={<Checkbox {...label} />} label={'字符'} />
        </FormGroup>

        <Box sx={{px: 2, mt: 2}}>
          <TextField variant={'outlined'} fullWidth />
        </Box>
      </Block>
    </Container>
  );
}
