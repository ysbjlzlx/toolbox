import { Card, Input } from 'antd';
import { FC } from 'react';
import ContentCopyButton from './ContentCopyButton';

interface Props {
  title: string;
  text: string;
}

const TextResultBox: FC<Props> = ({ text, title }) => {
  const { TextArea } = Input;
  return (
    <Card title={title} extra={<ContentCopyButton text={text} />} bodyStyle={{ padding: '10px' }} hoverable={false}>
      <TextArea bordered={true} autoSize={{ minRows: 5, maxRows: 10 }} value={text} />
    </Card>
  );
};
export default TextResultBox;
