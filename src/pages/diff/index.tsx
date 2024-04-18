import { EditorState } from '@codemirror/state';
import { EditorView } from 'codemirror';
import type { FC } from 'react';
import CodeMirrorMerge from 'react-codemirror-merge';

const { Original, Modified } = CodeMirrorMerge;

let doc = `one
twod
three
four
five`;

export const Component: FC = () => {
  return (
    <CodeMirrorMerge orientation="a-b" revertControls="a-to-b" className="h-dvh">
      <Original value={doc} extensions={[EditorView.editable.of(true), EditorState.readOnly.of(false)]} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(true), EditorState.readOnly.of(false)]}
      />
    </CodeMirrorMerge>
  );
};
