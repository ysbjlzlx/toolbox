import React, {useState} from 'react';
import {IconButton, InputAdornment, Snackbar} from '@mui/material';
import {ContentCopy} from '@mui/icons-material';

import clipboardCopy from 'clipboard-copy';

interface Props {
  content: string | null | undefined;
  success?: Function | null | undefined;
}

export default function ContentCopyAdornment(props: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    if (typeof props.content === 'string') {
      clipboardCopy(props.content).then(() => {
        if (typeof props.success === 'function') {
          props.success();
          setOpen(true);
        }
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <InputAdornment position={'end'}>
        <IconButton aria-label={'Copy content'} onClick={handleClick}>
          <ContentCopy />
        </IconButton>
      </InputAdornment>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={'复制成功'}
      />
    </React.Fragment>
  );
}
