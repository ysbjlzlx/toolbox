import { PageContainer } from '@ant-design/pro-components';
import type { SelectProps } from 'antd';
import { Button, Card, Col, Row, Select } from 'antd';
import XML from 'fast-xml-parser';
import * as LosslessJSON from 'lossless-json';
import { useState } from 'react';
import AceEditor from 'react-ace';
import type { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

import Iconify from '@/components/Iconify';
import { format } from '@/utils/formatter.ts';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeTypeOptions: SelectProps['options'] = [
  { label: 'JSON', value: 'json' },
  { label: 'YAML', value: 'yaml' },
  { label: 'XML', value: 'xml' },
];

const options: AceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
  showLineNumbers: true,
};

const targetAceEditorOptions: AceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
  showLineNumbers: true,
};
const FormatConversionPage = () => {
  const [sourceType, setSourceType] = useState<string>('json');
  const [targetType, setTargetType] = useState<string>('yaml');
  const [sourceValue, setSourceValue] = useState<string>('');
  const [targetValue, setTargetValue] = useState<string>('');

  const onClickSyncAltBtn = () => {
    const targetTypeTmp = targetType;
    setTargetType(sourceType);
    setSourceType(targetTypeTmp);
  };
  const onClickConversionBtn = () => {
    if (sourceValue === undefined || sourceValue === '') {
      return;
    }

    let sourceObj = null;

    // 解析 source
    try {
      if (sourceType === 'json') {
        sourceObj = LosslessJSON.parse(sourceValue, null, LosslessJSON.parseNumberAndBigInt);
      } else if (sourceType === 'yaml') {
        sourceObj = YAML.parse(sourceValue, { intAsBigInt: true });
      } else if (sourceType === 'xml') {
        const xmlParser = new XML.XMLParser();
        sourceObj = xmlParser.parse(sourceValue);
      }
    } catch (e) {
      alert(e);
    }

    // 设置 target
    try {
      if (targetType === 'yaml') {
        format(YAML.stringify(sourceObj), 'yaml').then((val) => {
          setTargetValue(val);
        });
      } else if (targetType === 'json') {
        format(LosslessJSON.stringify(sourceObj) || '', 'json').then((val) => {
          setTargetValue(val);
        });
      } else if (targetType === 'xml') {
        const xmlBuilder = new XML.XMLBuilder({
          ignoreAttributes: false,
          format: true,
          oneListGroup: true,
          suppressEmptyNode: true,
        });
        setTargetValue(xmlBuilder.build(sourceObj));
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <PageContainer title={false} className="bg-gray-50">
      <div className="mx-auto h-[calc(100dvh-56px)] max-w-screen-xl p-4 md:h-screen">
        <Card>
          <Row gutter={{ xs: 8, sm: 8, md: 16 }}>
            <Col span={8} sm={6} md={4}>
              <Select options={CodeTypeOptions} value={sourceType} onSelect={setSourceType} className="w-full" />
            </Col>
            <Col>
              <Button icon={<Iconify icon="material-symbols:sync-alt" />} onClick={onClickSyncAltBtn} />
            </Col>
            <Col span={8} sm={6} md={4}>
              <Select options={CodeTypeOptions} value={targetType} onSelect={setTargetType} className="w-full" />
            </Col>
            <Col span={4} sm={4} md={2}>
              <Button onClick={onClickConversionBtn}>转换</Button>
            </Col>
          </Row>
        </Card>
        <Row className="mt-4" gutter={[16, 16]}>
          <Col span={24} md={12}>
            <AceEditor
              mode={sourceType}
              theme="monokai"
              width="100%"
              height=""
              className="h-[calc(50vh-100px)] md:h-[calc(100vh-130px)]"
              setOptions={options}
              value={sourceValue}
              onChange={setSourceValue}
            />
          </Col>
          <Col span={24} md={12}>
            <AceEditor
              mode={targetType}
              theme="monokai"
              width="100%"
              height=""
              className="h-[calc(50dvh-100px)] md:h-[calc(100dvh-130px)]"
              setOptions={targetAceEditorOptions}
              value={targetValue}
              onChange={setTargetValue}
            />
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default FormatConversionPage;
