'use client';

import { Box } from '@mui/system';
import { Button, Col, Row } from 'antd';
import JSON5 from 'json5';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

import { format, parser } from '@/utils/formatter';

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/ext-searchbox');
    await import('ace-builds/src-noconflict/mode-json5');
    await import('ace-builds/src-noconflict/mode-yaml');
    await import('ace-builds/src-noconflict/theme-textmate');
    return ace;
  },
  { ssr: false },
);

const Page: FC = () => {
  const [json, setJson] = useState<string>('');
  const [yaml, setYaml] = useState<string>('');
  const [jsonOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });
  const [yamlOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });

  const json2yaml = async (value: string): Promise<string> => {
    if (!value || value === '') {
      return value;
    }
    console.log(JSON5.parse(value));
    return format(YAML.stringify(JSON5.parse(value)), 'yaml' as parser);
  };

  const json2yamlBtnClick = () => {
    json2yaml(json).then((result) => {
      setYaml(result);
    });
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <Button type={'text'} onClick={json2yamlBtnClick}>
          JSON =&gt; YAML
        </Button>
      </Box>
      <Row style={{ height: 'calc(100% - 37px)' }}>
        <Col xs={24} md={12} style={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="JSON"
            setOptions={jsonOptions}
            value={json}
            onChange={setJson}
            mode="json5"
            width="100%"
            height="100%"
          />
        </Col>
        <Col xs={24} md={12} style={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="YAML"
            setOptions={yamlOptions}
            value={yaml}
            onChange={setYaml}
            mode="yaml"
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default Page;
