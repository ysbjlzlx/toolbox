'use client';

import ContentCopyButton from '@/components/ContentCopyButton';
import { useCountDown } from 'ahooks';
import { Form, Input, Progress, Space } from 'antd';
import dayjs from 'dayjs';
import { TOTP } from 'otpauth';
import { useEffect, useState } from 'react';

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

  const TokenProcess = () => {
    return (
      <Progress
        type="circle"
        percent={((30 - Math.round(countTime / 1000)) / 30) * 100}
        format={() => {
          return Math.round(countTime / 1000);
        }}
        size={20}
      />
    );
  };

  return (
    <Form.Item label="Token">
      <Space.Compact>
        <Input value={token} addonAfter={<TokenProcess />} />
        <ContentCopyButton text={token} />
      </Space.Compact>
    </Form.Item>
  );
};
export default TokenField;
