import { Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import { ChangeEvent, useState } from 'react';

import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Form, Input } from 'antd';
import 'dayjs/locale/zh-cn';

interface Current {
  second: number;
  millisecond: number;
  date: string;
  dateWithMillisecond: string;
}

const Page = () => {
  const [form] = Form.useForm();
  const [input, setInput] = useState<string>('');
  const [current, setCurrent] = useState<Current>({
    second: dayjs().unix(),
    millisecond: dayjs().valueOf(),
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    dateWithMillisecond: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
  });

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    form.setFieldValue('second', '9527');
    console.log(e.target.value);
  };

  const onSecondChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const second = Number.parseInt(event.target.value, 10);
    setCurrent({
      second: second,
      millisecond: dayjs.unix(second).valueOf(),
      date: dayjs.unix(second).format('YYYY-MM-DD HH:mm:ss'),
      dateWithMillisecond: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    });
  };

  const onMillisecondChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const millisecond = Number.parseInt(event.target.value, 10);
    setCurrent({
      second: dayjs(millisecond).unix(),
      millisecond: millisecond,
      date: dayjs(millisecond).format('YYYY-MM-DD HH:mm:ss'),
      dateWithMillisecond: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    });
  };

  const onDateChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const instance = dayjs(event.target.value, 'YYYY-MM-DD HH:mm:ss');
    setCurrent({
      second: instance.unix(),
      millisecond: instance.valueOf(),
      date: event.target.value,
      dateWithMillisecond: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    });
  };

  const secondDateString = () => {
    return dayjs.unix(current.second).format('YYYY-MM-DD HH:mm:ss');
  };

  const millisecondDateString = () => {
    return dayjs(current.millisecond).format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  const dateStringSecond = () => {
    return dayjs(current.date, 'YYYY-MM-DD HH:mm:ss').unix();
  };

  return (
    <Container sx={{ pt: 2 }}>
      <Input value={input} onChange={inputOnChange} />
      <ProForm form={form} grid={true} submitter={false} initialValues={current}>
        <ProFormText name="date" label="日期时间" colProps={{ span: 12 }} />
        <ProFormText name="dateWithMillisecond" label="日期时间（毫秒）" colProps={{ span: 12 }} />
        <ProFormText name="second" label="时间戳（秒）" colProps={{ span: 12 }} />
        <ProFormText name="millisecond" label="时间戳（毫秒）" colProps={{ span: 12 }} />
      </ProForm>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField type="number" label="时间戳（秒）" value={current?.second} onChange={onSecondChange} fullWidth />
        </Grid>
        <Grid xs={6}>
          <TextField label="日期时间" value={secondDateString()} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={6}>
          <TextField label="时间戳（毫秒）" value={current?.millisecond} onChange={onMillisecondChange} fullWidth />
        </Grid>
        <Grid xs={6}>
          <TextField label="日期时间" value={millisecondDateString()} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={6}>
          <TextField label="日期时间" value={current?.date} onChange={onDateChange} fullWidth />
        </Grid>
        <Grid xs={6}>
          <TextField label="时间戳（秒）" value={dateStringSecond()} fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
