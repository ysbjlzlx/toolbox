import { PageContainer, ProForm, ProFormDigit, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Box } from '@mui/system';
import type { TabsProps } from 'antd';
import { Col, ColorPicker, Form, Row, Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { PlaceholderConfig } from '@/components/placeholder';
import DummyImage from '@/components/placeholder/DummyImage.tsx';
import HrefLuImage from '@/components/placeholder/HrefLuImage.tsx';
import PlaceholderImage from '@/components/placeholder/PlaceholderImage.tsx';

const defaultValues = {
  width: 320,
  height: 320,
  suffix: '.png',
  bgColor: '#cccccc',
  textColor: '#969696',
  text: 'img',
};

const suffixOptions = [
  { label: '.png', value: '.png' },
  { label: '.jpg', value: '.jpg' },
  { label: '.gif', value: '.gif' },
];

const PlaceholderImg: FC = () => {
  const [form] = Form.useForm();
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);

  const bgColor = Form.useWatch('bgColor', { form, preserve: true });
  const textColor = Form.useWatch('textColor', { form, preserve: true });

  useEffect(() => {
    const values = form.getFieldsValue();
    setPlaceholderConfig(values);
  }, [bgColor, form, textColor]);

  const tabsProps: TabsProps = {
    defaultActiveKey: 'HrefLuImage',
    items: [
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
    <PageContainer>
      <ProForm
        submitter={false}
        form={form}
        initialValues={defaultValues}
        onValuesChange={(_, values) => {
          setPlaceholderConfig(values);
        }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormDigit label="宽度" name="width" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormDigit label="高度" name="height" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormSelect label="后缀名" name="suffix" options={suffixOptions} allowClear={false} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormText
              label="背景颜色"
              name="bgColor"
              fieldProps={{
                suffix: (
                  <ColorPicker
                    value={bgColor}
                    onChange={(_, hex) => {
                      form.setFieldValue('bgColor', hex);
                    }}
                  />
                ),
              }}
              allowClear={false}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormText
              label="文本颜色"
              name="textColor"
              fieldProps={{
                suffix: (
                  <ColorPicker
                    value={textColor}
                    onChange={(_, hex) => {
                      form.setFieldValue('textColor', hex);
                    }}
                  />
                ),
              }}
              allowClear={false}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormText label="文本" name="text" allowClear={false} fieldProps={{ style: { height: '42px' } }} />
          </Col>
        </Row>
      </ProForm>
      <Box>
        <Tabs {...tabsProps} />
      </Box>
    </PageContainer>
  );
};

export default PlaceholderImg;
