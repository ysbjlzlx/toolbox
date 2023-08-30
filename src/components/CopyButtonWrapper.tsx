import { Button, message } from 'antd';
import ClipboardJS from 'clipboard';
import type { FC, ReactNode } from 'react';
import { useLayoutEffect, useRef } from 'react';

interface Props {
  text?: string | undefined;
  children: ReactNode;
}

const CopyButtonWrapper: FC<Props> = ({ text, children }: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [messageApi, contextHolder] = message.useMessage();

  useLayoutEffect(() => {
    if (btnRef?.current) {
      const clipboard = new ClipboardJS(btnRef.current);
      clipboard.on('success', () => {
        messageApi.success('复制成功');
      });
      clipboard.on('error', (e) => {
        console.error(e);
      });

      // return clipboard;
    }
  }, [btnRef, messageApi]);

  return (
    <>
      {contextHolder}
      <Button type="text" ref={btnRef} data-clipboard-text={text} aria-label="Copy content">
        {children}
      </Button>
    </>
  );
};

export default CopyButtonWrapper;
