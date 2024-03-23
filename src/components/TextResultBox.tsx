import { Card, Input } from 'antd';
import type { FC } from 'react';
import ContentCopyButton from './ContentCopyButton';

interface Props {
  title: string;
  text: string;
}

const TextResultBox: FC<Props> = ({ text, title }) => {
  const { TextArea } = Input;
  return (
    <Card
      title={title}
      extra={<ContentCopyButton text={text} />}
      bodyStyle={{ padding: '10px', paddingBottom: '20px' }}
      hoverable={false}
    >
      <TextArea variant="outlined" autoSize={{ minRows: 5, maxRows: 10 }} value={text} showCount />
    </Card>
  );
};
export default TextResultBox;
