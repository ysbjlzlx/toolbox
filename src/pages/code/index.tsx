import { defaultKeymap } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { EditorView, keymap } from '@codemirror/view';
import { Box } from '@mui/material';
import { basicSetup } from 'codemirror';
import { FC, useEffect, useRef } from 'react';

import keyBinds from './extensions/KeyBinds';
import { wordCounter } from './extensions/WordCounter';

const Index: FC = () => {
  const container = useRef<HTMLDivElement>();
  const editor = useRef<EditorView>();
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
      extensions: [
        basicSetup,
        json(),
        oneDarkTheme,
        customTheme,
        wordCounter(),
        keymap.of(defaultKeymap),
        keymap.of(keyBinds),
      ],
    });

    // eslint-disable-next-line no-new
    editor.current = new EditorView({
      state,
      parent: container.current,
    });
    return () => {
      if (editor.current) {
        editor.current?.destroy();
        editor.current = undefined;
      }
    };
  }, []);

  return <Box ref={container} sx={{ height: '100%' }} />;
};

export default Index;
