import { PageContainer } from '@ant-design/pro-components';
import { useLocalStorageState } from 'ahooks';
import { Col, Row } from 'antd';
import * as OTPAuth from 'otpauth';

import AccountList from './AccountList.tsx';
import DetailInfo from './DetailInfo.tsx';
import type { TotpI } from './typings';

const Totp = () => {
  const [totps] = useLocalStorageState<TotpI[]>('totps', { defaultValue: [] });

  console.log(OTPAuth.Secret.fromUTF8('ha'));
  return (
    <PageContainer title={false}>
      <Row>
        <Col span={8}>
          <AccountList totps={totps} />
        </Col>
        <Col span={16}>
          <DetailInfo />
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Totp;
