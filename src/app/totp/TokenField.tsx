import { Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useCountDown } from 'ahooks';
import dayjs from 'dayjs';
import { TOTP } from 'otpauth';
import { useEffect, useState } from 'react';
import ContentCopyAdornment from '../../components/ContentCopyAdornment';

interface Props {
  totp?: TOTP;
}

const TokenField = ({ totp }: Props) => {
  const [targetDate, setTargetDate] = useState<number>(0);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setTargetDate(0);
    if (totp) {
      const second = dayjs().second();
      const millisecond = dayjs().valueOf();
      const duration = (second >= 30 ? 60 - second : 30 - second) * 1000;
      setTargetDate(millisecond + duration);
      setToken(totp.generate());
    }
  }, [totp]);

  const [countTime] = useCountDown({
    targetDate,
    onEnd: () => {
      setTargetDate(0);
      if (totp) {
        const second = dayjs().second();
        const millisecond = dayjs().valueOf();
        const duration = (second >= 30 ? 60 - second : 30 - second) * 1000;
        setTargetDate(millisecond + duration);
        setToken(totp.generate());
      }
    },
  });

  return (
    <TextField
      label="Token"
      value={token}
      InputProps={{
        endAdornment: (
          <>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={((30 - Math.round(countTime / 1000)) / 30) * 100} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" component="div" color="text.secondary">
                  {Math.round(countTime / 1000)}
                </Typography>
              </Box>
            </Box>
            <ContentCopyAdornment content={token} />
          </>
        ),
      }}
    />
  );
};
export default TokenField;
