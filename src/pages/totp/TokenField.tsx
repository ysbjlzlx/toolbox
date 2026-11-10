// biome-ignore-all lint/correctness/noNestedComponentDefinitions: ignore

import { useCountDown } from "ahooks";
import { Form, Input, Progress, Space } from "antd";
import { getSeconds } from "date-fns";
import type { TOTP } from "otpauth";
import { useEffect, useState } from "react";
import CopyTextButton from "@/components/CopyTextButton";

interface Props {
  totp?: TOTP;
}

const TokenField = ({ totp }: Props) => {
  const [targetDate, setTargetDate] = useState<number>(0);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setTargetDate(0);
    if (totp) {
      const date = new Date();
      const second = getSeconds(date);
      const millisecond = date.getTime();
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
        const date = new Date();
        const second = getSeconds(date);
        const millisecond = date.getTime();
        const duration = (second >= 30 ? 60 - second : 30 - second) * 1000;
        setTargetDate(millisecond + duration);
        setToken(totp.generate());
      }
    },
  });

  // biome-ignore-start lint: Do not define component TokenProcess inside a function.
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
  // biome-ignore-end lint: Do not define component TokenProcess inside a function.

  return (
    <Form.Item label="Token">
      <Space.Compact>
        <Input value={token} />
        <Space.Addon>
          <TokenProcess />
        </Space.Addon>
        <CopyTextButton text={token} />
      </Space.Compact>
    </Form.Item>
  );
};
export default TokenField;
