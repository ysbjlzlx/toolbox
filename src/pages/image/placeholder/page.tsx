import {
  FormControlRender,
  PageContainer,
  pickControlPropsWithId,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import type { TabsProps } from 'antd';
import { Card, ColorPicker, Form, Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { PlaceholderConfig } from '@/components/placeholder';
import DummyImage from '@/components/placeholder/DummyImage.tsx';
import HrefLuImage from '@/components/placeholder/HrefLuImage.tsx';
import LocalImage from '@/components/placeholder/LocalImage.tsx';
import PlaceholderImage from '@/components/placeholder/PlaceholderImage.tsx';

const defaultValues = {
  width: 320,
  height: 320,
  suffix: '.png',
  bgColor: '#8c8c8c',
  textColor: '#f0f0f0',
  text: 'img',
};

const suffixOptions = [
  { label: '.png', value: '.png' },
  { label: '.jpg', value: '.jpg' },
  { label: '.gif', value: '.gif' },
];

export const Component: FC = () => {
  const [form] = Form.useForm();
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);

  const bgColor = Form.useWatch('bgColor', { form, preserve: true });
  const textColor = Form.useWatch('textColor', { form, preserve: true });

  useEffect(() => {
    const values = form.getFieldsValue();
    setPlaceholderConfig(values);
  }, [bgColor, form, textColor]);

  const tabsProps: TabsProps = {
    defaultActiveKey: 'LocalImage',
    items: [
      {
        key: 'LocalImage',
        label: 'Local',
        children: <LocalImage {...placeholderConfig} />,
      },
      {
        key: 'HrefLuImage',
        label: 'iph.href.lu',
        children: <HrefLuImage {...placeholderConfig} />,
      },
      {
        key: 'PlaceholderImage',
        label: 'via.placeholder.com',
        children: <PlaceholderImage {...placeholderConfig} />,
      },
      {
        key: 'DummyImage',
        label: 'dummyimage.com',
        children: <DummyImage {...placeholderConfig} />,
      },
    ],
  };
  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg p-4">
      <Card>
        <ProForm
          submitter={false}
          form={form}
          initialValues={defaultValues}
          onValuesChange={(_, values) => {
            setPlaceholderConfig(values);
          }}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <ProFormDigit label="宽度" name="width" fieldProps={{ size: 'large' }} />
            <ProFormDigit label="高度" name="height" fieldProps={{ size: 'large' }} />
            <ProFormSelect
              label="后缀名"
              name="suffix"
              options={suffixOptions}
              allowClear={false}
              fieldProps={{ size: 'large' }}
            />
            <ProForm.Item label="背景颜色" name="bgColor">
              <FormControlRender>
                {(itemProps) => {
                  return (
                    <ColorPicker
                      size="large"
                      showText
                      disabledAlpha
                      className="w-full justify-start"
                      {...pickControlPropsWithId(itemProps)}
                      onChange={(color) => {
                        form.setFieldValue('bgColor', color.toHexString());
                      }}
                    />
                  );
                }}
              </FormControlRender>
            </ProForm.Item>
            <ProForm.Item label="文本颜色" name="textColor">
              <FormControlRender>
                {(itemProps) => {
                  return (
                    <ColorPicker
                      size="large"
                      showText
                      disabledAlpha
                      className="w-full justify-start"
                      {...pickControlPropsWithId(itemProps)}
                      onChange={(color) => {
                        form.setFieldValue('textColor', color.toHexString());
                      }}
                    />
                  );
                }}
              </FormControlRender>
            </ProForm.Item>
            <ProFormText label="文本" name="text" allowClear={false} fieldProps={{ size: 'large' }} />
          </div>
        </ProForm>
        <div>
          <Tabs {...tabsProps} />
        </div>
      </Card>
    </PageContainer>
  );
};
