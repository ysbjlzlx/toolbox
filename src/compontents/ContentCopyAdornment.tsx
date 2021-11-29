import React from 'react';
import {IconButton, InputAdornment} from '@mui/material';
import {ContentCopy} from '@mui/icons-material';

import clipboardCopy from 'clipboard-copy';

interface Props {
  content: String | undefined | null;
}

export default function ContentCopyAdornment(props: Props) {
  const handleClick = () => {
    if (typeof props.content === 'string') {
      clipboardCopy(props.content);
    }
  };
  return (
    <InputAdornment position={'end'}>
      <IconButton aria-label={'Copy content'} onClick={handleClick}>
        <ContentCopy />
      </IconButton>
    </InputAdornment>
  );
}
