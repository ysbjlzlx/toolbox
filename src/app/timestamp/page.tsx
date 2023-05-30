import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Box, Container } from '@mui/material';
import { Form, Input } from 'antd';
import dayjs from 'dayjs';
import { ChangeEvent, useEffect, useState } from 'react';

import { isDateStr, isMillisecond, isNumber, isUnixSecond } from '../../utils/validator';

import 'dayjs/locale/zh-cn';

interface Current {
  second: number;
  millisecond: number;
  date: string;
  dateWithMillisecond: string;
}

const Page = () => {
  const [form] = Form.useForm();
  const [input, setInput] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
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
    form.setFieldValue('second', instance.unix());
    form.setFieldValue('millisecond', instance.valueOf());
    form.setFieldValue('date', instance.format('YYYY-MM-DD HH:mm:ss'));
    form.setFieldValue('dateWithMillisecond', instance.format('YYYY-MM-DD HH:mm:ss.SSS'));
  }, [input, form]);

  return (
    <Container sx={{ pt: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Input
          value={input}
          onChange={inputOnChange}
          placeholder="请输入 10 位数字（秒）、13 位数字（毫秒）或者 YYYY-MM-DD HH:mm:ss 格式字符串"
          showCount
        />
      </Box>
      <ProForm form={form} grid={true} submitter={false}>
        <ProFormText name="date" label="日期时间" colProps={{ span: 12 }} allowClear={false} />
        <ProFormText name="dateWithMillisecond" label="日期时间（毫秒）" colProps={{ span: 12 }} allowClear={false} />
        <ProFormText name="second" label="时间戳（秒）" colProps={{ span: 12 }} allowClear={false} />
        <ProFormText name="millisecond" label="时间戳（毫秒）" colProps={{ span: 12 }} allowClear={false} />
      </ProForm>
    </Container>
  );
};

export default Page;
