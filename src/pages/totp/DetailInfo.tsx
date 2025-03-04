import type { ProFormProps } from "@ant-design/pro-components";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Button, Form, type FormInstance, Input, Space } from "antd";
import * as OTPAuth from "otpauth";
import { useState } from "react";

import Iconify from "@/components/Iconify";
import TotpCard from "./TotpCard.tsx";

const DetailInfo = () => {
  const [form] = Form.useForm();
  const [instance, setInstance] = useState<OTPAuth.TOTP>();

  const refreshSecret = () => {
    const secret = new OTPAuth.Secret();
    form.setFieldValue("secret", secret.base32);
  };

  const onFinish: ProFormProps["onFinish"] = async (formData): Promise<boolean> => {
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
      <ProForm form={form} layout="horizontal" onFinish={onFinish}>
        <ProFormText label="Issuer" name="issuer" required />
        <ProFormText label="Account" name="account" />
        <ProForm.Item shouldUpdate>
          {(form: FormInstance) => {
            return (
              <ProForm.Item label="Secret Key" name="secret" required>
                <Space.Compact style={{ width: "100%" }}>
                  <Input value={form.getFieldValue("secret")} showCount />
                  <Button icon={<Iconify icon="lucide:refresh-ccw" />} onClick={refreshSecret} />
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
