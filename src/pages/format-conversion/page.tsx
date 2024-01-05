import { PageContainer } from '@ant-design/pro-components';
import type { SelectProps } from 'antd';
import { Button, Card, Col, Row, Select } from 'antd';
import { useState } from 'react';

const CodeTypeOptions: SelectProps['options'] = [
  { label: 'JSON', value: 'json' },
  { label: 'YAML', value: 'yaml' },
];
const FormatConversionPage = () => {
  const [sourceType, setSourceType] = useState<string>('json');
  const [targetType, setTargetType] = useState<string>('yaml');

  const onClickConversionBtn = () => {
    alert('开发中。。。');
  };
  return (
    <PageContainer title={false}>
      <div className="max-w-screen-xl mx-auto pt-4 px-4">
        <Card>
          <Row gutter={16}>
            <Col span={4}>
              <Select options={CodeTypeOptions} value={sourceType} onSelect={setSourceType} className="w-full" />
            </Col>
            <Col span={4}>
              <Select options={CodeTypeOptions} value={targetType} onSelect={setTargetType} className="w-full" />
            </Col>
            <Col>
              <Button onClick={onClickConversionBtn}>转换</Button>
            </Col>
          </Row>
        </Card>
        <Row className="mt-4" gutter={16}>
          <Col span={12}>
            <Card>Content</Card>
          </Col>
          <Col span={12}>
            <Card>Content</Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default FormatConversionPage;
