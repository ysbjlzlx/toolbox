'use client';

import { Box } from '@mui/system';
import { Col, Row } from 'antd';
import { useState } from 'react';
import AceEditor from 'react-ace';
import type { AceOptions } from 'react-ace/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';

export default function Markdown() {
  const [markdown, setMarkdown] = useState<string>('');

  const markdownOptions: AceOptions = {
    useWorker: false,
    showLineNumbers: true,
    wrap: true,
    fontSize: 14,
  };
  return (
    <Box sx={{ height: '100vh' }}>
      <Row>
        <Col xs={24} md={12} style={{ height: '100vh' }}>
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
        </Col>
        <Col xs={24} md={12} style={{ height: '100vh' }}>
          <Box height="calc(100% - 37px)" sx={{ width: '100%', px: 1 }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </Box>
        </Col>
      </Row>
    </Box>
  );
}
