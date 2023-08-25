import Iconify from '@/components/Iconify';
import { IconButton, InputAdornment } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler | undefined;
}

const RefreshAdornment = ({ onClick }: Props) => {
  return (
    <InputAdornment position="end">
      <IconButton aria-label="Refresh hex" onClick={onClick}>
        <Iconify icon="material-symbols:refresh" />
      </IconButton>
    </InputAdornment>
  );
};

export default RefreshAdornment;
