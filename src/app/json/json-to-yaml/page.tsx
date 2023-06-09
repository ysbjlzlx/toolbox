'use client';

import { Box, Button, Grid } from '@mui/material';
import JSON5 from 'json5';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

import { format, parser } from '../../../utils/formatter';

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

  const json2yaml = (value: string): string => {
    if (!value || value === '') {
      return value;
    }
    console.log(JSON5.parse(value));
    return format(YAML.stringify(JSON5.parse(value)), 'yaml' as parser);
  };

  const json2yamlBtnClick = () => {
    setYaml(json2yaml(json));
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <Button onClick={json2yamlBtnClick}>JSON =&gt; YAML</Button>
      </Box>
      <Grid container sx={{ height: 'calc(100% - 37px)' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
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
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
