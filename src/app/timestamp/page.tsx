import { Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import { ChangeEvent, useState } from 'react';

import 'dayjs/locale/zh-cn';

interface Current {
  second: number;
  millisecond: number;
  date: string;
}

const Page = () => {
  const [current, setCurrent] = useState<Current>({
    second: dayjs().unix(),
    millisecond: dayjs().valueOf(),
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  });

  const onSecondChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const second = Number.parseInt(event.target.value, 10);
    setCurrent({
      second: second,
      millisecond: dayjs.unix(second).valueOf(),
      date: dayjs.unix(second).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

  const onMillisecondChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const millisecond = Number.parseInt(event.target.value, 10);
    setCurrent({
      second: dayjs(millisecond).unix(),
      millisecond: millisecond,
      date: dayjs(millisecond).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

  const onDateChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const instance = dayjs(event.target.value, 'YYYY-MM-DD HH:mm:ss');
    setCurrent({
      second: instance.unix(),
      millisecond: instance.valueOf(),
      date: event.target.value,
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
