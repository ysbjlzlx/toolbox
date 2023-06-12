'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Box } from '@mui/material';
import { Button, Input, Segmented, Space, message } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import { enc } from 'crypto-js';
import { SegmentedRawOption } from 'rc-segmented';
import { useCallback, useState } from 'react';
// @ts-ignore
// @ts-ignore
import basex from 'base-x';
import bs58 from 'bs58';
import bs58check from 'bs58check';

import TextResultBox from '../../../components/TextResultBox';

type BaseType = 'base16' | 'base32' | 'base58' | 'base64' | 'base85';

export default function Page() {
  const [type, setType] = useState<BaseType>('base64');
  const [plain, setPlain] = useState<string>('');
  const [target, setTarget] = useState<string>('');

  const [messageApi, contextHolder] = message.useMessage();

  const segmentedOptions: (SegmentedRawOption | SegmentedLabeledOption)[] = [
    { label: 'Base16', value: 'base16' },
    { label: 'Base32', value: 'base32', disabled: true },
    { label: 'Base58', value: 'base58', disabled: false },
    { label: 'Base64', value: 'base64' },
    { label: 'Base85', value: 'base85', disabled: true },
  ];

  const encode = useCallback(() => {
    if ('base16' === type) {
      setTarget(enc.Hex.stringify(enc.Utf8.parse(plain)));
    } else if ('base32' === type) {
    } else if ('base58' === type) {
      const uint8array = new TextEncoder().encode(plain);
      const result = bs58.encode(Uint8Array.from(uint8array));
      console.log(bs58check.encode(uint8array));
      setTarget(result);
      const base58 = basex('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
      console.log(base58.encode(uint8array));
    } else if ('base64' === type) {
      setTarget(enc.Base64.stringify(enc.Utf8.parse(plain)));
    }
  }, [type, plain]);

  const decode = useCallback(() => {
    if ('base16' === type) {
      setTarget(enc.Utf8.stringify(enc.Hex.parse(plain)));
    } else if ('base32' === type) {
    } else if ('base58' === type) {
      const result = new TextDecoder().decode(bs58.decode(plain));
      setTarget(result);
    } else if ('base64' === type) {
      setTarget(enc.Utf8.stringify(enc.Base64.parse(plain)));
    }
  }, [type, plain]);

  return (
    <PageContainer token={{ paddingInlinePageContainerContent: 10, paddingBlockPageContainerContent: 10 }}>
      {contextHolder}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Segmented
          block={true}
          value={type}
          options={segmentedOptions}
          onChange={(value) => {
            setType(value as BaseType);
          }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Input.TextArea
          value={plain}
          onChange={(event) => {
            setPlain(event.target.value);
          }}
          placeholder="文本"
          autoSize={{ minRows: 5, maxRows: 10 }}
          showCount
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Space.Compact>
          <Button onClick={encode}>编码</Button>
          <Button onClick={decode}>解码</Button>
        </Space.Compact>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextResultBox title="结果" text={target} />
      </Box>
    </PageContainer>
  );
}
