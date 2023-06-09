import { Box, TextField } from '@mui/material';
import { TOTP } from 'otpauth';
import QRCode from 'qrcode';
import { useEffect, useMemo, useRef } from 'react';

import ContentCopyAdornment from '../../../components/ContentCopyAdornment';
import TokenField from './TokenField';

interface Props {
  totp?: TOTP;
}

const TotpCard = ({ totp }: Props) => {
  const qrcodeContainer = useRef<HTMLCanvasElement>(null);
  const options = useMemo(() => {
    return { width: 128, height: 128 };
  }, []);

  useEffect(() => {
    if (totp) {
      QRCode.toCanvas(qrcodeContainer.current, totp.toString(), options);
    }
  }, [options, totp]);
  return (
    <Box>
      <Box sx={options}>
        <canvas ref={qrcodeContainer} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TokenField totp={totp} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <TextField
          label="URI"
          value={totp?.toString() || ''}
          InputProps={{ endAdornment: <ContentCopyAdornment content={totp?.toString()} /> }}
          fullWidth
        />
      </Box>
    </Box>
  );
};
export default TotpCard;
