import { PageContainer } from "@ant-design/pro-components";
import { Editor, InlineToolbarPlugin } from "@textbus/xnote";
import { type FC, useEffect, useRef } from "react";

import "katex/dist/katex.min.css";

export const Component: FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = new Editor({
      plugins: [new InlineToolbarPlugin({ theme: "dark" })],
    });
    if (editorRef?.current) {
      editor.mount(editorRef.current).then(() => {
        console.log("编辑器准备完成。");
      });
    }
    return () => {
      console.log(editor.getHTML());
      editor.destroy();
    };
  }, []);

  return (
    <PageContainer title={false} className="p-4 pt-10">
      <div className="h-[calc(100dvh-112px)] md:h-[calc(100dvh-56px)]">
        <div ref={editorRef} className="vditor" />
      </div>
    </PageContainer>
  );
};
