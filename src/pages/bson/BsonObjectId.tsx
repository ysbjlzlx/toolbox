import { Box, Container, TextField, Typography } from '@mui/material';
import ObjectID from 'bson-objectid';
import { useEffect, useState } from 'react';

import ContentCopyAdornment from '../../components/ContentCopyAdornment';
import RefreshAdornment from '../../components/RefreshAdornment';

const BsonObjectId = () => {
  const [hexString, setHexString] = useState<string>('');

  useEffect(() => {
    refreshHexString();
  }, []);

  const refreshHexString = () => {
    setHexString(ObjectID().toHexString());
  };

  return (
    <Container>
      <Typography variant="h2">BSON ObjectID</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="hex"
          value={hexString}
          fullWidth
          InputProps={{
            endAdornment: (
              <>
                <RefreshAdornment onClick={refreshHexString} />
                <ContentCopyAdornment content={hexString} />
              </>
            ),
          }}
        />
      </Box>
    </Container>
  );
};
export default BsonObjectId;
