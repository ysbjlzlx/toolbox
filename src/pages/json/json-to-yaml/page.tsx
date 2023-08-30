import { Box } from '@mui/system';
import { Button, Col, Row } from 'antd';
import JSON5 from 'json5';
import type { FC } from 'react';
import { useState } from 'react';
import AceEditor from 'react-ace';
import type { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-textmate';

import type { parser } from '@/utils/formatter.ts';
import { format } from '@/utils/formatter.ts';

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
        <Button type="text" onClick={json2yamlBtnClick}>
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
