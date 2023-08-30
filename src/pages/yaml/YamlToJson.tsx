import { Box } from '@mui/system';
import { Button, Col, Row } from 'antd';
import prettierBabelPlugin from 'prettier/plugins/babel';
import prettier from 'prettier/standalone';
import type { FC } from 'react';
import { useState } from 'react';
import AceEditor from 'react-ace';
import type { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-textmate';

const YamlToJson: FC = () => {
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

  const yaml2json = async (value: string): Promise<string> => {
    try {
      const s = JSON.stringify(YAML.parse(value));
      return prettier.format(s, {
        parser: 'json',
        plugins: [prettierBabelPlugin],
      });
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn(e);
      } else {
        console.warn(e);
      }
      return '';
    }
  };

  const yaml2jsonButClick = () => {
    yaml2json(yaml).then((result) => {
      setJson(result);
    });
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <Button type="text" onClick={yaml2jsonButClick}>
          YAML =&gt; JSON
        </Button>
      </Box>
      <Row style={{ height: 'calc(100% - 37px)' }}>
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
        <Col xs={24} md={12} style={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="JSON"
            setOptions={jsonOptions}
            value={json}
            onChange={setJson}
            mode="json"
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default YamlToJson;
