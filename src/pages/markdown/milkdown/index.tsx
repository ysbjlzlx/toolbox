import { Crepe } from "@milkdown/crepe";
import { type FC, useEffect, useRef } from "react";

import "@milkdown/crepe/theme/common/style.css";

// We have some themes for you to choose
import "@milkdown/crepe/theme/frame.css";

export const Component: FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const crepeRef = useRef<Crepe>(undefined);

  useEffect(() => {
    crepeRef.current = new Crepe({
      root: editorRef.current,
      defaultValue: "Hello, Milkdown!",
    });

    crepeRef.current.create().then((editor) => {
      editor.onStatusChange((status) => {
        console.log(status);
      });
    });

    return () => {
      // To destroy the editor
      crepeRef.current?.destroy();
    };
  }, []);

  return <div ref={editorRef} className="h-dvh w-full" />;
};
