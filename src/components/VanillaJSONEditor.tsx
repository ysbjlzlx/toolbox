import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

import { JSONEditor, JSONEditorPropsOptional } from 'vanilla-jsoneditor';

const VanillaJSONEditor = (props: JSONEditorPropsOptional) => {
  const containerRef = useRef<HTMLDivElement>();
  const editorRef = useRef<JSONEditor>();

  useEffect(() => {
    const options = {
      target: containerRef.current,
      props: {},
    };
    // @ts-ignore
    editorRef.current = new JSONEditor(options);

    return () => {
      // destroy editor
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.updateProps(props);
    }
  }, [props]);

  return <Box ref={containerRef} height="100%" />;
};

export default VanillaJSONEditor;
