import { PageContainer } from "@ant-design/pro-components";
import { Editor, InlineToolbarPlugin, LeftToolbarPlugin } from "@textbus/xnote";
import { type FC, useEffect, useRef } from "react";

import "katex/dist/katex.min.css";

export const Component: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<Editor>(undefined);

  useEffect(() => {
    if (containerRef?.current) {
      editorRef.current = new Editor({
        plugins: [new InlineToolbarPlugin({ theme: "dark" }), new LeftToolbarPlugin({ theme: "dark" })],
      });
      editorRef.current.mount(containerRef.current).then(() => {
        console.log("编辑器准备完成。");
      });
    }
    return () => {
      console.log(editorRef.current?.getHTML());
      editorRef.current?.destroy();
    };
  }, []);

  return (
    <PageContainer title={false} className="p-4 pt-10">
      <div className="editor-main">
        <div className="editor-center">
          <div className="editor-card">
            <h3 className="editor-title">行内工具条 + 左侧工具条</h3>
            <div ref={containerRef} className="editor-host"></div>
            <div className="editor-scroll-spacer"></div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
