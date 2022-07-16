import { Refresh as RefreshIcon } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler | undefined;
}

const RefreshAdornment = ({ onClick }: Props) => {
  return (
    <InputAdornment position="end">
      <IconButton aria-label="Refresh hex" onClick={onClick}>
        <RefreshIcon />
      </IconButton>
    </InputAdornment>
  );
};

export default RefreshAdornment;
