import ContentCopyButton from '@/components/ContentCopyButton.tsx';
import { Box } from '@mui/system';
import { Input, Space } from 'antd';

export interface Props {
  value?: string;
  tag?: string | null;
}

const InputCopyable = (props: Props) => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Space.Compact block>
        <Input value={props.value || ''} addonBefore={props.tag} showCount />
        <ContentCopyButton text={props.value || ''} />
      </Space.Compact>
    </Box>
  );
};

export default InputCopyable;
