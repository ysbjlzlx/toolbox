import * as LosslessJSON from "lossless-json";
import { useEffect, useRef } from "react";
import { type JSONEditorPropsOptional, type JsonEditor, Mode, type TextContent } from "vanilla-jsoneditor";
import { createJSONEditor, javascriptQueryLanguage, lodashQueryLanguage } from "vanilla-jsoneditor";

const VanillaJSONEditor = (props: JSONEditorPropsOptional) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<JsonEditor>(undefined);

  useEffect(() => {
    if (containerRef?.current) {
      editorRef.current = createJSONEditor({
        target: containerRef.current,
        props: {
          parser: LosslessJSON,
          queryLanguages: [javascriptQueryLanguage, lodashQueryLanguage],
          onRenderMenu: (items, context) => {
            const showParseBtn =
              !context.readOnly &&
              Mode.text === context.mode &&
              (editorRef.current?.get() as TextContent).text.startsWith('"') &&
              (editorRef.current?.get() as TextContent).text.endsWith('"');

            items.push({
              type: "button",
              title: "JSON.parse",
              icon: {
                prefix: "fas",
                icon: [
                  512,
                  512,
                  [],
                  "",
                  "m320,488c0,9.5 -5.6,18.1 -14.2,21.9s-18.8,2.3 -25.8,-4.1l-80,-72c-5.1,-4.6 -7.9,-11 -7.9,-17.8s2.9,-13.3 7.9,-17.8l80,-72c7,-6.3 17.2,-7.9 25.8,-4.1s14.2,12.4 14.2,21.9l0,40l16,0c35.3,0 64,-28.7 64,-64l0,-166.7c-28.3,-12.3 -48,-40.5 -48,-73.3c0,-44.2 35.8,-80 80,-80s80,35.8 80,80c0,32.8 -19.7,61 -48,73.3l0,166.7c0,70.7 -57.3,128 -128,128l-16,0l0,40zm136,-408a24,24 0 1 0 -48,0a24,24 0 1 0 48,0zm-264,-56c0,-9.5 5.6,-18.1 14.2,-21.9s18.8,-2.3 25.8,4.1l80,72c5.1,4.6 7.9,11 7.9,17.8s-2.9,13.3 -7.9,17.8l-80,72c-7,6.3 -17.2,7.9 -25.8,4.1s-14.2,-12.4 -14.2,-21.9l0,-40l-16,0c-35.3,0 -64,28.7 -64,64l0,166.7c28.3,12.3 48,40.5 48,73.3c0,44.2 -35.8,80 -80,80s-80,-35.8 -80,-80c0,-32.8 19.7,-61 48,-73.3l0,-166.7c0,-70.7 57.3,-128 128,-128l16,0l0,-40zm-136,408a24,24 0 1 0 48,0a24,24 0 1 0 -48,0z",
                ],
                iconName: "code-compare",
              },
              onClick: () => {
                editorRef.current?.updateProps({
                  content: { text: LosslessJSON.parse((editorRef.current?.get() as TextContent).text) as string },
                });
              },
              disabled: !showParseBtn,
            });

            return items;
          },
        } as JSONEditorPropsOptional,
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
    editorRef.current?.updateProps({ ...props });
  }, [props]);

  return <div className="h-full w-full" ref={containerRef} />;
};

export default VanillaJSONEditor;
