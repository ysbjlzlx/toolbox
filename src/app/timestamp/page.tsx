import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Container } from '@mui/material';
import { Form, Input } from 'antd';
import dayjs from 'dayjs';
import { ChangeEvent, useEffect, useState } from 'react';

import { isMillisecond, isNumber, isUnixSecond } from '../../utils/validator';

import 'dayjs/locale/zh-cn';

interface Current {
  second: number;
  millisecond: number;
  date: string;
  dateWithMillisecond: string;
}

const Page = () => {
  const [form] = Form.useForm();
  const [instance, setInstance] = useState<Date>(new Date());
  const [input, setInput] = useState<string>('');
  const [current] = useState<Current>({
    second: dayjs().unix(),
    millisecond: dayjs().valueOf(),
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    dateWithMillisecond: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
  });

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(isNumber(e.target.value));
    if (isUnixSecond(e.target.value)) {
      const second = Number.parseInt(e.target.value, 10);
      setInstance(dayjs.unix(second).toDate());
    } else if (isMillisecond(e.target.value)) {
      const millisecond = Number.parseInt(e.target.value, 10);
      setInstance(dayjs(millisecond).toDate());
    } else if (isNumber(e.target.value)) {
      const second = Number.parseInt(e.target.value, 10);
      setInstance(dayjs.unix(second).toDate());
    } else {
      setInstance(new Date());
    }
  };

  useEffect(() => {
    form.setFieldValue('second', dayjs(instance).unix());
    form.setFieldValue('millisecond', dayjs(instance).valueOf());
    form.setFieldValue('date', dayjs(instance).format('YYYY-MM-DD HH:mm:ss'));
    form.setFieldValue('dateWithMillisecond', dayjs(instance).format('YYYY-MM-DD HH:mm:ss.SSS'));
  }, [instance, form]);

  return (
    <Container sx={{ pt: 2 }}>
      <Input value={input} onChange={inputOnChange} />
      <ProForm form={form} grid={true} submitter={false} initialValues={current}>
        <ProFormText name="date" label="日期时间" colProps={{ span: 12 }} />
        <ProFormText name="dateWithMillisecond" label="日期时间（毫秒）" colProps={{ span: 12 }} />
        <ProFormText name="second" label="时间戳（秒）" colProps={{ span: 12 }} />
        <ProFormText name="millisecond" label="时间戳（毫秒）" colProps={{ span: 12 }} />
      </ProForm>
    </Container>
  );
};

export default Page;
