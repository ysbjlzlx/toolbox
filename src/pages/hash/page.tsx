import InputCopyable from '@/components/InputCopyable.tsx';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Input } from 'antd';
import { MD5, SHA1, SHA256, SHA512 } from 'crypto-js';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface HashResult {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha512?: string;
}

export const Component: FC = () => {
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
    <PageContainer title={false} className="mx-auto max-w-screen-md pt-4">
      <Card>
        <div className="mb-8">
          <Input.TextArea
            value={plainText}
            rows={2}
            placeholder="原文"
            onChange={(event: any) => {
              setPlainText(event.target.value);
            }}
            showCount
          />
        </div>

        <InputCopyable tag="MD5" value={hashResult?.md5} />
        <InputCopyable tag="SHA1" value={hashResult?.sha1} />
        <InputCopyable tag="SHA256" value={hashResult?.sha256} />
        <InputCopyable tag="SHA512" value={hashResult?.sha512} />
      </Card>
    </PageContainer>
  );
};
