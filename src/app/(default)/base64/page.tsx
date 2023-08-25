'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Box } from '@mui/material';
import { Button, Input, Segmented, Space, message } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import { SegmentedRawOption } from 'rc-segmented';
import { useCallback, useState } from 'react';

import { BaseType, decode as baseDecode, encode as baseEncode } from '@/lib/BaseEncoder';

import TextResultBox from '../../../components/TextResultBox';

export default function Page() {
  const [type, setType] = useState<BaseType>('base-64');
  const [plain, setPlain] = useState<string>('');
  const [target, setTarget] = useState<string>('');

  const [messageApi, contextHolder] = message.useMessage();

  const segmentedOptions: (SegmentedRawOption | SegmentedLabeledOption)[] = [
    { label: 'Base16', value: 'base-16' },
    { label: 'Base32', value: 'base-32', disabled: false },
    { label: 'Z Base32', value: 'z-base-32', disabled: false },
    { label: 'Base36', value: 'base-36', disabled: false },
    { label: 'Base58', value: 'base-58', disabled: false },
    { label: 'Base58 Check', value: 'base-58-check', disabled: false },
    { label: 'Base64', value: 'base-64' },
    { label: 'Base85', value: 'base-85', disabled: false },
  ];

  const encode = useCallback(() => {
    const result = baseEncode(type, plain);
    setTarget(result);
  }, [type, plain]);

  const decode = useCallback(() => {
    const result = baseDecode(type, plain);
    setTarget(result);
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
