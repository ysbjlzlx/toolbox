import { Refresh as RefreshIcon } from '@mui/icons-material';
import { Box, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import ObjectID from 'bson-objectid';
import { useEffect, useState } from 'react';
import ContentCopyAdornment from '../components/ContentCopyAdornment';

const BSONObjectID = () => {
  const [hexString, setHexString] = useState<string>('');

  useEffect(() => {
    refreshHexString();
  }, []);

  const refreshHexString = () => {
    setHexString(ObjectID().toHexString());
  };

  const RefreshAdornment = () => {
    return (
      <InputAdornment position={'end'}>
        <IconButton aria-label={'Refresh hex'} onClick={refreshHexString}>
          <RefreshIcon />
        </IconButton>
      </InputAdornment>
    );
  };
  return (
    <Container>
      <Typography variant={'h2'}>BSON ObjectID</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          label={'hex'}
          value={hexString}
          fullWidth
          InputProps={{
            endAdornment: (
              <>
                <RefreshAdornment />
                <ContentCopyAdornment content={hexString} />
              </>
            ),
          }}
        />
      </Box>
    </Container>
  );
};
export default BSONObjectID;
