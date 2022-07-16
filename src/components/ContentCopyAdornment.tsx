import { ContentCopy } from '@mui/icons-material';
import { IconButton, InputAdornment, Snackbar } from '@mui/material';
import { useState } from 'react';
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  content?: string | undefined;
  onCopy?: Function | undefined;
}

export default function ContentCopyAdornment({ content, onCopy }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOnCopy = (text: string, result: DataTransfer) => {
    setOpen(true);
    if (onCopy) {
      onCopy(text, result);
    }
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <CopyToClipboard text={content} onCopy={handleOnCopy}>
        <InputAdornment position="end">
          <IconButton aria-label="Copy content">
            <ContentCopy />
          </IconButton>
        </InputAdornment>
      </CopyToClipboard>

      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000} message="复制成功" />
    </>
  );
}
