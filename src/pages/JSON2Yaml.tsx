import React, { FC, useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

const JSON2Yaml: FC = () => {
  const [json, setJson] = useState<string>('');
  const [yaml, setYaml] = useState<string>('');
  const [jsonOptions, setJsonOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });
  const [yamlOptions, setYamlOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });

  const json2yaml = (value: string): string => {
    try {
      return YAML.stringify(JSON.parse(value));
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn(e);
      } else {
        console.warn(e);
      }
      return '';
    }
  };

  const yaml2json = (value: string): string => {
    try {
      return JSON.stringify(YAML.parse(value));
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn(e);
      } else {
        console.warn(e);
      }
      return '';
    }
  };

  const json2yamlBtnClick = () => {
    setYaml(json2yaml(json));
  };

  const yaml2jsonButClick = () => {
    setJson(yaml2json(yaml));
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <ButtonGroup>
          <Button onClick={json2yamlBtnClick}>JSON =&gt; YAML</Button>
          <Button onClick={yaml2jsonButClick}>YAML =&gt; JSON</Button>
        </ButtonGroup>
      </Box>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={6} sx={{ height: '100%' }}>
          <AceEditor
            setOptions={jsonOptions}
            value={json}
            onChange={setJson}
            mode="json"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={6} sx={{ height: '100%' }}>
          <AceEditor
            setOptions={yamlOptions}
            value={yaml}
            onChange={setYaml}
            mode="yaml"
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JSON2Yaml;
