import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Box, Container } from '@mui/system';
import { Button, Form, Input, Space } from 'antd';
import dayjs from 'dayjs';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { isDateStr, isMillisecond, isNumber, isUnixSecond } from '../../utils/validator.ts';

import Iconify from '@/components/Iconify';
import 'dayjs/locale/zh-cn';

const Page = () => {
  const [form] = Form.useForm();
  const [input, setInput] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const refreshInputDate = () => {
    setInput(dayjs().format('YYYY-MM-DD HH:mm:ss'));
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