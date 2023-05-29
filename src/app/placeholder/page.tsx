import { ProForm, ProFormDigit, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { Col, ColorPicker, Form, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import { PlaceholderConfig } from '../../components/placeholder';
import DummyImage from '../../components/placeholder/DummyImage';
import HrefLuImage from '../../components/placeholder/HrefLuImage';
import PlaceholderImage from '../../components/placeholder/PlaceholderImage';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PlaceholderImg: FC = () => {
  const [form] = Form.useForm();
  const [provider, setProvider] = useState<number>(0);
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);

  const bgColor = Form.useWatch('bgColor', { form, preserve: true });
  const textColor = Form.useWatch('textColor', { form, preserve: true });

  useEffect(() => {
    const values = form.getFieldsValue();
    setPlaceholderConfig(values);
  }, [bgColor, textColor, form]);

  return (
    <Container sx={{ mt: 2 }}>
      <ProForm
        submitter={false}
        form={form}
        initialValues={defaultValues}
        onValuesChange={(changedValues, values) => {
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
                    onChange={(value, hex) => {
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
                    onChange={(value, hex) => {
                      form.setFieldValue('textColor', hex);
                    }}
                  />
                ),
              }}
              allowClear={false}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <ProFormText label="文本" name="text" allowClear={false} />
          </Col>
        </Row>
      </ProForm>
      <Box>
        <Tabs value={provider} onChange={(e, value) => setProvider(value)} aria-label="basic tabs example">
          <Tab label="iph.href.lu" {...a11yProps(0)} />
          <Tab label="via.placeholder.com" {...a11yProps(1)} />
          <Tab label="dummyimage.com" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={provider} index={0}>
          <HrefLuImage {...placeholderConfig} />
        </TabPanel>
        <TabPanel value={provider} index={1}>
          <PlaceholderImage {...placeholderConfig} />
        </TabPanel>
        <TabPanel value={provider} index={2}>
          <DummyImage {...placeholderConfig} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default PlaceholderImg;
