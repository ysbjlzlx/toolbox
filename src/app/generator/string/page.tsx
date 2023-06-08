'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Refresh } from '@mui/icons-material';
import { Button, Card, Checkbox, Col, Form, Input, Row, Slider } from 'antd';
import { useEffect, useState } from 'react';

import ContentCopyAdornment from '../../../components/ContentCopyAdornment';
import { generator, GeneratorOptions } from '../../../scripts/RandomStringUtils';

const initialOptions: GeneratorOptions = {
  numeric: true,
  lowercase: true,
  uppercase: true,
  symbol: false,
  symbolChars: '!@#$%^&*',
};
export default function Page() {
  const [randomString, setRandomString] = useState<string>('');

  useEffect(() => {
    refresh();
  }, []);

  const refresh = (options: GeneratorOptions = initialOptions) => {
    const varchar = generator(options);
    setRandomString(varchar);
  };

  const onValuesChange = (changedValues: any, allValues: GeneratorOptions) => {
    refresh(allValues);
  };

  const onFinish = (values: GeneratorOptions) => {
    refresh(values);
  };

  return (
    <PageContainer title={false} style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
      <Form layout="horizontal" initialValues={initialOptions} onValuesChange={onValuesChange} onFinish={onFinish}>
        <Card actions={[<Button key="1" htmlType="submit" icon={<Refresh />} />]}>
          <Row>
            <Col span={4}>
              <Form.Item name="numeric" valuePropName="checked">
                <Checkbox>数字 0 ～ 9</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="lowercase" valuePropName="checked">
                <Checkbox>小写字母 a ~ z</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="uppercase" valuePropName="checked">
                <Checkbox>大写字母 A ~ Z</Checkbox>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={4}>
                  <Form.Item name="symbol" valuePropName="checked">
                    <Checkbox>符号</Checkbox>
                  </Form.Item>
                </Col>
                <Col span={20}>
                  <Form.Item name="symbolChars">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="length" label="长度">
                <Slider min={6} max={64} step={1} marks={{ 6: '6', 8: '8', 16: '16', 32: '32', 64: '64' }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Input.Group compact>
                  <Input value={randomString} style={{ width: 'calc(100% - 60px)' }} />
                  <ContentCopyAdornment content={randomString} />
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </PageContainer>
  );
}
