import { FullContainer } from "@/components/FullContainer.tsx";
import { MarkdownEditor, type MarkdownEditorInstance } from "@ant-design/md-editor";
import type { MarkdownEditorProps } from "@ant-design/md-editor/dist/MarkdownEditor";
import { ProCard } from "@ant-design/pro-components";
import { type FC, useEffect, useRef } from "react";

export const Component: FC = () => {
  const editorInstance = useRef<MarkdownEditorInstance>(undefined);

  useEffect(() => {
    const insertMarkdown = () => {
      editorInstance.current?.store.setMDContent("#dd");
    };
    insertMarkdown();
  }, []);

  const onChange: MarkdownEditorProps["onChange"] = (value) => {
    console.log(value);
  };

  return (
    <FullContainer>
      <ProCard className="h-full" bodyStyle={{ height: "100%" }}>
        <MarkdownEditor
          reportMode
          height="100%"
          width="100%"
          toolBar={{ enable: true, min: false }}
          toc={true}
          onChange={onChange}
        />
      </ProCard>
    </FullContainer>
  );
};
