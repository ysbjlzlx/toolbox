import React, { FC, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';

// @ts-ignore
import { JSONEditor } from 'svelte-jsoneditor/dist/jsoneditor.js';

const JSONBeta: FC = () => {
  const editorRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (editorRef.current) {
      new JSONEditor({
        target: editorRef.current,
        props: { mode: 'code', content: { text: '{}' } },
      });
    }
  }, []);

  return (
    <Container>
      <Box ref={editorRef} height="98vh" />
    </Container>
  );
};

export default JSONBeta;
