'use client';

import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import AceEditor from 'react-ace';
import { AceOptions } from 'react-ace/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/mode-markdown';
import 'ace-builds/src-min-noconflict/theme-textmate';

export default function Markdown() {
  const [markdown, setMarkdown] = useState<string>('');

  const markdownOptions: AceOptions = {
    useWorker: false,
    showLineNumbers: true,
    wrap: true,
    fontSize: 14,
  };
  return (
    <Box sx={{ height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="Input"
            setOptions={markdownOptions}
            value={markdown}
            onChange={setMarkdown}
            mode="markdown"
            width="100%"
            height="calc(100% - 37px)"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <Box height="calc(100% - 37px)" sx={{ width: '100%', px: 1 }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
