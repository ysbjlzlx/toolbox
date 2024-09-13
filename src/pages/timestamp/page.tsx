import { PageContainer } from "@ant-design/pro-components";
import { Button, Card, Input, Space } from "antd";
import {
  formatISO,
  formatISO9075,
  formatRFC3339,
  formatRFC7231,
  fromUnixTime,
  getUnixTime,
  parse,
  parseISO,
} from "date-fns";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

import Iconify from "@/components/Iconify";
import InputCopyable from "@/components/InputCopyable.tsx";
import { isDateStr, isMillisecond, isNumber, isUnixSecond } from "@/utils/validator.ts";

interface TimestampVO {
  tag: string;
  value: string;
}

export const Component = () => {
  const [input, setInput] = useState<string>(formatISO9075(new Date()));
  const [timeList, setTimeList] = useState<TimestampVO[]>([]);

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const refreshInputDate = () => {
    setInput(formatISO9075(new Date()));
  };

  useEffect(() => {
    if (input === null || input === undefined || input === "") {
      return;
    }
    let instance: Date;
    if (isUnixSecond(input)) {
      instance = fromUnixTime(Number.parseInt(input, 10));
    } else if (isMillisecond(input)) {
      instance = new Date(Number.parseInt(input, 10));
    } else if (isNumber(input)) {
      instance = fromUnixTime(Number.parseInt(input, 10));
    } else if (isDateStr(input, "yyyy-MM-dd HH:mm:ss")) {
      instance = parse(input, "yyyy-MM-dd HH:mm:ss", new Date());
    } else if (isDateStr(input, "yyyy-MM-dd")) {
      instance = parse(input, "yyyy-MM-dd", new Date());
    } else {
      instance = parseISO(input);
    }
    console.log(instance.toISOString());
    setTimeList([
      { tag: "Unix timestamp (Second)", value: getUnixTime(instance).toString() },
      { tag: "Timestamp (Millisecond)", value: instance.valueOf().toString() },
      { tag: "ISO 8601", value: formatISO(instance) },
      { tag: "ISO 9075", value: formatISO9075(instance) },
      { tag: "RFC 3339", value: formatRFC3339(instance) },
      { tag: "RFC 7231", value: formatRFC7231(instance) },
    ]);
  }, [input]);

  return (
    <PageContainer title={false} className="pt-4">
      <Card className="mx-auto max-w-screen-sm">
        <div>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              value={input}
              onChange={inputOnChange}
              placeholder="请输入 10 位数字（秒）、13 位数字（毫秒）或者 YYYY-MM-DD HH:mm:ss 格式字符串"
              showCount
            />
            <Button icon={<Iconify icon="lucide:refresh-ccw" />} onClick={refreshInputDate} />
          </Space.Compact>
        </div>
        <div className="mt-8">
          {timeList.map((timestampVO) => {
            return <InputCopyable key={timestampVO.tag} {...timestampVO} />;
          })}
        </div>
      </Card>
    </PageContainer>
  );
};
