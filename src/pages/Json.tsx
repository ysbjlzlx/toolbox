import React, {useRef, useState, useEffect} from 'react';
import {Box, Container} from '@mui/material';
import JSONEditor, {JSONEditorOptions} from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.css';

const options: JSONEditorOptions = {
  language: 'zh-CN',
  mode: 'code',
};

export default function Json() {
  const editorRef = useRef<HTMLDivElement>();
  const [editorHeight, setEditorHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (editorRef.current) {
      new JSONEditor(editorRef.current, options);
    }
    function re() {
      setEditorHeight(window.innerHeight);
    }
    window.addEventListener('resize', re);
  }, []);

  return (
    <Container>
      <Box ref={editorRef} height={editorHeight} />
    </Container>
  );
}
