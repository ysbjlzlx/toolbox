import React, { FC, useEffect, useRef } from 'react';

import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { Box } from '@mui/material';
import { oneDarkTheme } from '@codemirror/theme-one-dark';

const Code: FC = () => {
  const Editor = useRef<HTMLDivElement>();
  useEffect(() => {
    const customTheme = EditorView.theme(
      {
        '&': {
          height: '100%',
        },
      },
      { dark: true },
    );

    const state = EditorState.create({
      extensions: [basicSetup, json(), oneDarkTheme, customTheme],
    });

    new EditorView({
      state: state,
      parent: Editor.current,
    });
  }, []);

  return <Box ref={Editor} sx={{ height: '100%' }} />;
};

export default Code;
