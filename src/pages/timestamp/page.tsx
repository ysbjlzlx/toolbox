import { Box, Container } from '@mui/system';
import { Button, Input, Space } from 'antd';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { isDateStr, isMillisecond, isNumber, isUnixSecond } from '@/utils/validator.ts';

import Iconify from '@/components/Iconify';
import InputCopyable from '@/components/InputCopyable.tsx';
import 'dayjs/locale/zh-cn';

interface TimestampVO {
  tag: string;
  value: string;
}

const Page = () => {
  const [input, setInput] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const [timeList, setTimeList] = useState<TimestampVO[]>([]);

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const refreshInputDate = () => {
    setInput(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  };

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const tz = dayjs.tz.guess();
    let instance = dayjs();
    if (isUnixSecond(input)) {
      const second = Number.parseInt(input, 10);
      instance = dayjs.unix(second);
    } else if (isMillisecond(input)) {
      const millisecond = Number.parseInt(input, 10);
      instance = dayjs(millisecond);
    } else if (isNumber(input)) {
      const second = Number.parseInt(input, 10);
      instance = dayjs.unix(second);
    } else if (isDateStr(input, 'YYYY-MM-DD HH:mm:ss')) {
      instance = dayjs(input, 'YYYY-MM-DD HH:mm:ss');
    } else if (isDateStr(input, 'YYYY-MM-DD')) {
      instance = dayjs(input, 'YYYY-MM-DD 00:00:00');
    }
    setTimeList([
      { tag: 'Unix timestamp (Second)', value: instance.unix().toString() },
      { tag: 'Timestamp (Millisecond)', value: instance.valueOf().toString() },
      { tag: 'ISO 8601', value: instance.tz(tz).toISOString() },
      { tag: 'ISO 9075', value: instance.tz(tz).format('YYYY-MM-DD HH:mm:ss') },
      { tag: 'RFC 3339', value: instance.tz(tz).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') },
      { tag: 'RFC 7231', value: instance.tz(tz).format('ddd, DD MMM YYYY HH:mm:ss [GMT]') },
    ]);
  }, [input]);

  return (
    <Container sx={{ pt: 2 }} maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Space.Compact style={{ width: '100%' }}>
          <Input
            value={input}
            onChange={inputOnChange}
            placeholder="请输入 10 位数字（秒）、13 位数字（毫秒）或者 YYYY-MM-DD HH:mm:ss 格式字符串"
            showCount
          />
          <Button icon={<Iconify icon="material-symbols:refresh" />} onClick={refreshInputDate} />
        </Space.Compact>
      </Box>
      <Box>
        {timeList.map((timestampVO) => {
          return <InputCopyable key={timestampVO.tag} {...timestampVO} />;
        })}
      </Box>
    </Container>
  );
};

export default Page;
