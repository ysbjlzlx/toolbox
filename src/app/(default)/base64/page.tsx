'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Box } from '@mui/material';
import { Button, Input, Segmented, Space, message } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import { enc } from 'crypto-js';
import Joi from 'joi';
import { SegmentedRawOption } from 'rc-segmented';
import { useCallback, useState } from 'react';
// @ts-ignore
import Base58 from 'base58';

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
      try {
        Joi.assert(plain, Joi.number());
      } catch (e) {
        messageApi.error('Base58 仅支持数字编码');
        return;
      }
      setTarget(Base58.int_to_base58(plain));
    } else if ('base64' === type) {
      setTarget(enc.Base64.stringify(enc.Utf8.parse(plain)));
    }
  }, [type, plain, messageApi]);

  const decode = useCallback(() => {
    if ('base16' === type) {
      setTarget(enc.Utf8.stringify(enc.Hex.parse(plain)));
    } else if ('base32' === type) {
    } else if ('base58' === type) {
      setTarget(Base58.base58_to_int(plain));
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
