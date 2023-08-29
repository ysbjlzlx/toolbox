'use client';

import { Container } from '@mui/system';
import { useLocalStorageState } from 'ahooks';
import { Col, Row } from 'antd';
import * as OTPAuth from 'otpauth';

import AccountList from './AccountList';
import DetailInfo from './DetailInfo';
import { TotpI } from './typings';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,

  maxWidth: '700px',
  boxShadow: 'rgb(97 97 97 / 20%) 0px 4px 20px',
  borderRadius: 'clamp(0px, (100vw - 750px) * 9999, 10px)',
};

const Totp = () => {
  const [totps, setTotps] = useLocalStorageState<TotpI[]>('totps', { defaultValue: [] });

  console.log(OTPAuth.Secret.fromUTF8('ha'));
  return (
    <Container>
      <Row>
        <Col span={8}>
          <AccountList totps={totps} />
        </Col>
        <Col span={16}>
          <DetailInfo />
        </Col>
      </Row>
    </Container>
  );
};
export default Totp;
