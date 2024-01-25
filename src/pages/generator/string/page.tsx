import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Checkbox, Form, Input, Slider } from 'antd';
import { useEffect, useState } from 'react';

import Iconify from '@/components/Iconify';
import InputCopyable from '@/components/InputCopyable.tsx';
import type { GeneratorOptions } from '@/scripts/RandomStringUtils.ts';
import { generator } from '@/scripts/RandomStringUtils.ts';

const initialOptions: GeneratorOptions = {
  numeric: true,
  lowercase: true,
  uppercase: true,
  symbol: false,
  symbolChars: '!@#$%^&*',
};
export const Component = () => {
  const [randomString, setRandomString] = useState<string>('');

  useEffect(() => {
    refresh();
  }, []);

  const refresh = (options: GeneratorOptions = initialOptions) => {
    const varchar = generator(options);
    setRandomString(varchar);
  };

  const onValuesChange = (_: any, allValues: GeneratorOptions) => {
    refresh(allValues);
  };

  const onFinish = (values: GeneratorOptions) => {
    refresh(values);
  };

  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg px-4 pt-4">
      <Form layout="horizontal" initialValues={initialOptions} onValuesChange={onValuesChange} onFinish={onFinish}>
        <Card actions={[<Button key="1" htmlType="submit" icon={<Iconify icon="material-symbols:refresh" />} />]}>
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <Form.Item name="numeric" valuePropName="checked" className="sm:col-span-6">
              <Checkbox>数字 0 ～ 9</Checkbox>
            </Form.Item>
            <Form.Item name="lowercase" valuePropName="checked" className="sm:col-span-6">
              <Checkbox>小写字母 a ~ z</Checkbox>
            </Form.Item>
            <Form.Item name="uppercase" valuePropName="checked" className="sm:col-span-6">
              <Checkbox>大写字母 A ~ Z</Checkbox>
            </Form.Item>
            <div className="flex sm:col-span-6">
              <Form.Item name="symbol" valuePropName="checked" className="basis-20">
                <Checkbox>符号</Checkbox>
              </Form.Item>
              <Form.Item name="symbolChars" className="flex-1">
                <Input />
              </Form.Item>
            </div>
          </div>
          <div>
            <Form.Item name="length" label="长度">
              <Slider min={6} max={64} step={1} marks={{ 6: '6', 8: '8', 16: '16', 32: '32', 64: '64' }} />
            </Form.Item>
          </div>
          <div>
            <InputCopyable value={randomString} />
          </div>
        </Card>
      </Form>
    </PageContainer>
  );
};
