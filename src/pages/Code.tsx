import { FC, useEffect, useRef } from 'react';

import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { Box } from '@mui/material';
import { basicSetup } from 'codemirror';

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

    // eslint-disable-next-line no-new
    new EditorView({
      state,
      parent: Editor.current,
    });
  }, []);

  return <Box ref={Editor} sx={{ height: '100%' }} />;
};

export default Code;
