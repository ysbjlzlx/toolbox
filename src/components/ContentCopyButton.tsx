import { ContentCopy } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { message } from 'antd';
import ClipboardJS from 'clipboard';
import { useCallback } from 'react';

interface Props {
  text?: string | undefined;
}

export default function ContentCopyButton({ text }: Props) {
  const [messageApi, contextHolder] = message.useMessage();

  const btn = useCallback(
    (node: HTMLButtonElement) => {
      if (node === null) {
        return;
      }
      const clipboard = new ClipboardJS(node);
      clipboard.on('success', (e) => {
        messageApi.open({
          type: 'success',
          content: '复制成功',
        });
      });
      clipboard.on('error', (e) => {
        console.error(e);
      });

      return clipboard;
    },
    [messageApi],
  );

  return (
    <>
      {contextHolder}
      <IconButton ref={btn} data-clipboard-text={text} aria-label="Copy content">
        <ContentCopy />
      </IconButton>
    </>
  );
}
