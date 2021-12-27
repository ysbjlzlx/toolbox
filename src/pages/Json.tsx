import React, {useRef, useEffect} from 'react';
import {Box, Container} from '@mui/material';
import JSONEditor, {JSONEditorOptions} from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.css';

const options: JSONEditorOptions = {
  modes: ['code', 'view'],
  language: 'zh-CN',
  mode: 'code',
  search: true,
};

export default function Json() {
  const editorRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (editorRef.current) {
      new JSONEditor(editorRef.current, options);
    }
  }, []);

  return (
    <Container>
      <Box ref={editorRef} height="100vh" />
    </Container>
  );
}
