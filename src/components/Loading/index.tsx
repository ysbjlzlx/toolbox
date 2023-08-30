import { Box, Stack } from '@mui/system';
import { Spin } from 'antd';

export default function Loading() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ height: '100vh' }}>
      <Box>
        <Spin />
      </Box>
      <Box>
        <div>加载中...</div>
      </Box>
    </Stack>
  );
}
