import { Button, Snackbar } from '@mui/material';
import ClipboardJS from 'clipboard';
import { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  text?: string | undefined;
  children: ReactNode;
}

const CopyButtonWrapper: FC<Props> = ({ text, children }: Props) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (btnRef?.current) {
      const clipboard = new ClipboardJS(btnRef.current);
      clipboard.on('success', (e) => {
        setOpen(true);
      });
      clipboard.on('error', (e) => {
        console.error(e);
      });

      // return clipboard;
    }
  }, [btnRef]);

  return (
    <>
      <Button ref={btnRef} data-clipboard-text={text} aria-label="Copy content">
        {children}
      </Button>

      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={1500} message="复制成功" />
    </>
  );
};

export default CopyButtonWrapper;
