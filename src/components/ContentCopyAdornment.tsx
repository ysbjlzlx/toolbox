import Iconify from '@/components/Iconify';
import { IconButton, InputAdornment, Snackbar } from '@mui/material';
import ClipboardJS from 'clipboard';
import { useEffect, useRef, useState } from 'react';

interface Props {
  content?: string | undefined;
  onSuccess?: Function | undefined;
}

export default function ContentCopyAdornment({ content, onSuccess }: Props) {
  const btn = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (btn.current) {
      const clipboard = new ClipboardJS(btn.current);
      clipboard.on('success', (e) => {
        setOpen(true);
      });
      clipboard.on('error', (e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <>
      <InputAdornment position="end">
        <IconButton ref={btn} data-clipboard-text={content} aria-label="Copy content">
          <Iconify icon="material-symbols:content-copy-outline" />
        </IconButton>
      </InputAdornment>

      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={3000} message="复制成功" />
    </>
  );
}
