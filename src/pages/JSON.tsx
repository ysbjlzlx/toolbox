import { Box } from '@mui/material';
import { FC, useEffect, useRef } from 'react';

// @ts-ignore
import { JSONEditor } from 'svelte-jsoneditor/dist/jsoneditor.js';

const JSONBeta: FC = () => {
  const editorRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (editorRef.current) {
      // @ts-ignore
      new JSONEditor({
        target: editorRef.current,
        props: { mode: 'code', content: { text: '' } },
      });
    }
  }, []);

  return <Box ref={editorRef} height="100%" />;
};

export default JSONBeta;
