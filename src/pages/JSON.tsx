import React, { FC, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

// @ts-ignore
import { JSONEditor } from 'svelte-jsoneditor/dist/jsoneditor.js';

const JSONBeta: FC = () => {
  const editorRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (editorRef.current) {
      new JSONEditor({
        target: editorRef.current,
        props: { mode: 'code', content: { text: '' } },
      });
    }
  }, []);

  return <Box ref={editorRef} height="100%" />;
};

export default JSONBeta;
