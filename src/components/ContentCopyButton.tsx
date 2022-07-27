import { ContentCopy } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';
import ClipboardJS from 'clipboard';
import { useCallback, useState } from 'react';

interface Props {
  text?: string | undefined;
}

export default function ContentCopyButton({ text }: Props) {
  const [open, setOpen] = useState(false);

  const btn = useCallback((node) => {
    if (node === null) {
      return;
    }
    const clipboard = new ClipboardJS(node);
    clipboard.on('success', (e) => {
      setOpen(true);
    });
    clipboard.on('error', (e) => {
      console.error(e);
    });

    return clipboard;
  }, []);

  return (
    <>
      <IconButton ref={btn} data-clipboard-text={text} aria-label="Copy content">
        <ContentCopy />
      </IconButton>

      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={3000} message="复制成功" />
    </>
  );
}
