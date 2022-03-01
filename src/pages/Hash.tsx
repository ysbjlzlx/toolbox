import React, {ReactElement, useState, useEffect} from 'react';
import {Container, TextField} from '@mui/material';
import {MD5, SHA1, SHA256, SHA512} from 'crypto-js';
import ContentCopyAdornment from '@/compontents/ContentCopyAdornment';

type HashResult = {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha512?: string;
};
const defaultHashResult: HashResult = {
  md5: '',
  sha1: '',
  sha256: '',
  sha512: '',
};
const Hash = (): ReactElement => {
  const [plainText, setPlainText] = useState<string>('');
  const [hashResult, setHashResult] = useState<HashResult | null>(
    defaultHashResult
  );
  useEffect(() => {
    if (!plainText || plainText === '') {
      setHashResult(defaultHashResult);
      return;
    }
    const md5 = MD5(plainText).toString();
    const sha1 = SHA1(plainText).toString();
    const sha256 = SHA256(plainText).toString();
    const sha512 = SHA512(plainText).toString();
    setHashResult({...hashResult, md5, sha1, sha256, sha512});
  }, [plainText]);
  return (
    <Container>
      <TextField
        label={'原文'}
        value={plainText}
        onChange={event => {
          setPlainText(event.target.value);
        }}
        helperText={plainText.length || ''}
        fullWidth
        margin={'normal'}
      />
      <TextField
        label={'MD5'}
        value={hashResult?.md5}
        fullWidth
        margin={'normal'}
        InputProps={{
          endAdornment: <ContentCopyAdornment content={hashResult?.md5} />,
        }}
        helperText={hashResult?.md5?.length || ''}
      />
      <TextField
        label={'SHA1'}
        value={hashResult?.sha1}
        fullWidth
        margin={'normal'}
        InputProps={{
          endAdornment: <ContentCopyAdornment content={hashResult?.sha1} />,
        }}
        helperText={hashResult?.sha1?.length || ''}
      />
      <TextField
        label={'SHA256'}
        value={hashResult?.sha256}
        fullWidth
        margin={'normal'}
        InputProps={{
          endAdornment: <ContentCopyAdornment content={hashResult?.sha256} />,
        }}
        helperText={hashResult?.sha256?.length || ''}
      />
      <TextField
        label={'SHA512'}
        value={hashResult?.sha512}
        fullWidth
        margin={'normal'}
        InputProps={{
          endAdornment: <ContentCopyAdornment content={hashResult?.sha512} />,
        }}
        helperText={hashResult?.sha512?.length || ''}
      />
    </Container>
  );
};

export default Hash;
