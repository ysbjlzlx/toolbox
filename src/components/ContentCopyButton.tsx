import { ContentCopy } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  text?: string | undefined;
}

export default function ContentCopyButton({ text }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CopyToClipboard
        text={text}
        onCopy={() => {
          setOpen(true);
        }}
      >
        <IconButton aria-label="Copy content">
          <ContentCopy />
        </IconButton>
      </CopyToClipboard>

      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={3000} message="复制成功" />
    </>
  );
}
