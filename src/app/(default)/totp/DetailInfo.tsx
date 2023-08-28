'use client';

import { ProForm, ProFormProps, ProFormText } from '@ant-design/pro-components';
import { Button, Form, Input, Space } from 'antd';
import * as OTPAuth from 'otpauth';
import { useState } from 'react';

import Iconify from '@/components/Iconify';
import TotpCard from './TotpCard';

const DetailInfo = () => {
  const [form] = Form.useForm();
  const [instance, setInstance] = useState<OTPAuth.TOTP>();

  const refreshSecret = () => {
    const secret = new OTPAuth.Secret();
    form.setFieldValue('secret', secret.base32);
  };

  const onFinish: ProFormProps['onFinish'] = async (formData): Promise<boolean | void> => {
    console.log(formData);
    const instance = new OTPAuth.TOTP({
      issuer: formData.issuer,
      label: formData.account,
      secret: formData.secretKey,
    });
    setInstance(instance);

    return true;
  };
  return (
    <>
      <ProForm form={form} layout={'horizontal'} onFinish={onFinish}>
        <ProFormText label={'Issuer'} name={'issuer'} required />
        <ProFormText label={'Account'} name={'account'} />
        <ProForm.Item shouldUpdate>
          {(form) => {
            return (
              <ProForm.Item label={'Secret Key'} name={'secret'} required>
                <Space.Compact style={{ width: '100%' }}>
                  <Input value={form.getFieldValue('secret')} showCount />
                  <Button icon={<Iconify icon={'material-symbols:refresh'} />} onClick={refreshSecret} />
                </Space.Compact>
              </ProForm.Item>
            );
          }}
        </ProForm.Item>
      </ProForm>
      <TotpCard totp={instance} />
    </>
  );
};

export default DetailInfo;
