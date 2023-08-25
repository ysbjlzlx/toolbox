'use client';

import { Box, Button, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import prettierBabelPlugin from 'prettier/plugins/babel';
import prettier from 'prettier/standalone';
import { FC, useState } from 'react';
import { AceOptions } from 'react-ace/types';
import YAML from 'yaml';

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/ext-searchbox');
    await import('ace-builds/src-noconflict/mode-json');
    await import('ace-builds/src-noconflict/mode-yaml');
    await import('ace-builds/src-noconflict/theme-textmate');
    return ace;
  },
  { ssr: false },
);

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
        <Button onClick={yaml2jsonButClick}>YAML =&gt; JSON</Button>
      </Box>
      <Grid container sx={{ height: 'calc(100% - 37px)' }}>
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
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default YamlToJson;
