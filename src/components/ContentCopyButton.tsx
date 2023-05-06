import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';

interface Props {
  text?: string | undefined;
}

export default function ContentCopyButton({ text }: Props) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Button
        shape="circle"
        icon={<CopyOutlined />}
        onClick={() => {
          copy(text || '', {
            format: 'text/plain',
            onCopy: (clipboardData: object) => {
              console.log(clipboardData);
              messageApi.open({
                type: 'success',
                content: '复制成功',
              });
            },
          });
        }}
      />
    </>
  );
}
