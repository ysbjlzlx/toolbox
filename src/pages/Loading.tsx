import { Box, CircularProgress, Stack } from '@mui/material';

export default function Loading() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ height: '100vh' }}>
      <Box>
        <CircularProgress />
      </Box>
      <Box>
        <div>加载中...</div>
      </Box>
    </Stack>
  );
}
