import * as LosslessJSON from "lossless-json";
import { useEffect, useRef } from "react";
import type { JSONEditorPropsOptional } from "vanilla-jsoneditor";
import { JSONEditor, javascriptQueryLanguage, lodashQueryLanguage } from "vanilla-jsoneditor";

const VanillaJSONEditor = (props: JSONEditorPropsOptional) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<JSONEditor>();

  useEffect(() => {
    if (containerRef?.current) {
      editorRef.current = new JSONEditor({
        target: containerRef.current,
        props: { parser: LosslessJSON, queryLanguages: [javascriptQueryLanguage, lodashQueryLanguage] },
      });
    }

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
      editorRef.current?.updateProps({ ...props });
    }
  }, [props]);

  return <div className="h-full w-full" ref={containerRef} />;
};

export default VanillaJSONEditor;
