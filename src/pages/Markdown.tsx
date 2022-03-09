import React from 'react';
import { Container } from '@mui/material';
import { Editor, rootCtx } from '@milkdown/core';
import { ReactEditor, useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { history } from '@milkdown/plugin-history';
import { clipboard } from '@milkdown/plugin-clipboard';
import { tooltip } from '@milkdown/plugin-tooltip';
import { prism } from '@milkdown/plugin-prism';

export default function Markdown() {
  const editor = useEditor((root) => {
    return Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(nord)
      .use(commonmark)
      .use(history)
      .use(clipboard)
      .use(tooltip)
      .use(prism);
  });
  return (
    <Container sx={{ mt: 2 }}>
      <ReactEditor editor={editor} />
    </Container>
  );
}
