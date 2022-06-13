import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

import { JSONEditor } from 'svelte-jsoneditor/dist/jsoneditor';
import { JSONEditorPropsOptional } from 'svelte-jsoneditor/types';

const SvelteJSONEditor = (props: JSONEditorPropsOptional) => {
  const containerRef = useRef<HTMLDivElement>();
  const editorRef = useRef<JSONEditor>();

  useEffect(() => {
    editorRef.current = new JSONEditor({
      // @ts-ignore
      target: containerRef.current,
      props: {},
    });
    return () => {
      // destroy editor
      if (editorRef.current) {
        console.log('destroy editor');
        editorRef.current.destroy();
        editorRef.current = void 0;
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

export default SvelteJSONEditor;
