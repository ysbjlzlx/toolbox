'use client';

import { Refresh as RefreshIcon } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import * as OTPAuth from 'otpauth';
import { Controller, useForm } from 'react-hook-form';

import { useState } from 'react';
import TotpCard from './TotpCard';
import { TotpI } from './typings';

const DetailInfo = () => {
  const [instance, setInstance] = useState<OTPAuth.TOTP>();
  const { register, handleSubmit, setValue, control } = useForm<TotpI>({ defaultValues: { secretKey: '' } });

  const refreshSecret = () => {
    const secret = new OTPAuth.Secret();
    setValue('secretKey', secret.base32, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };
  const onSave = (data: TotpI) => {
    const instance = new OTPAuth.TOTP({
      issuer: data.issuer,
      label: data.account,
      secret: data.secretKey,
    });
    setInstance(instance);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSave)}>
        <TextField label="Issuer" {...register('issuer')} fullWidth required />
        <Box sx={{ pt: 2 }}>
          <TextField label="Account" {...register('account')} fullWidth />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Controller
            control={control}
            name="secretKey"
            render={({ field }) => (
              <TextField
                label="Secret Key"
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={refreshSecret}>
                        <RefreshIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                required
              />
            )}
          />
        </Box>
        <Box sx={{ pt: 2, float: 'right' }}>
          <Button>取消</Button>
          <Button type="submit">保存</Button>
        </Box>
      </form>
      <TotpCard totp={instance} />
    </>
  );
};

export default DetailInfo;
