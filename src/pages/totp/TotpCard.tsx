import { Box } from '@mui/system';
import { Input, QRCode, Space } from 'antd';
import type { TOTP } from 'otpauth';

import ContentCopyButton from '@/components/ContentCopyButton.tsx';
import TokenField from './TokenField.tsx';

interface Props {
  totp?: TOTP;
}

const TotpCard = ({ totp }: Props) => {
  return (
    <Box>
      <Box>
        <QRCode value={totp?.toString() || '-'} style={{ width: 128, height: 128 }} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TokenField totp={totp} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Space.Compact style={{ width: '100%' }}>
          <Input value={totp?.toString() || ''} />
          <ContentCopyButton text={totp?.toString()} />
        </Space.Compact>
      </Box>
    </Box>
  );
};
export default TotpCard;
