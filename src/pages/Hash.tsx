import { Container } from '@mui/material';
import { Input, Space } from 'antd';
import { MD5, SHA1, SHA256, SHA512 } from 'crypto-js';
import { ReactElement, useEffect, useState } from 'react';

interface HashResult {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha512?: string;
}

const Hash = (): ReactElement => {
  const defaultHashResult: HashResult = {
    md5: '',
    sha1: '',
    sha256: '',
    sha512: '',
  };

  const [plainText, setPlainText] = useState<string>('');
  const [hashResult, setHashResult] = useState<HashResult | null>(defaultHashResult);
  useEffect(() => {
    if (!plainText || plainText === '') {
      setHashResult((defaultHashResult) => defaultHashResult);
      return;
    }
    const md5 = MD5(plainText).toString();
    const sha1 = SHA1(plainText).toString();
    const sha256 = SHA256(plainText).toString();
    const sha512 = SHA512(plainText).toString();
    setHashResult((hashResult) => {
      return { ...hashResult, md5, sha1, sha256, sha512 };
    });
  }, [plainText]);
  return (
    <Container>
      <Space direction="vertical" style={{ display: 'flex' }} size="large">
        <Input.TextArea
          value={plainText}
          rows={2}
          placeholder="原文"
          onChange={(event: any) => {
            setPlainText(event.target.value);
          }}
          showCount
        />
        <Input value={hashResult?.md5} addonBefore="MD5" showCount />
        <Input value={hashResult?.sha1} addonBefore="SHA1" showCount />
        <Input value={hashResult?.sha256} addonBefore="SHA256" showCount />
        <Input value={hashResult?.sha512} addonBefore="SHA512" showCount />
      </Space>
    </Container>
  );
};

export default Hash;
