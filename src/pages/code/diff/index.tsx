import { PageContainer } from '@/components/ui';
import { EditorState } from '@codemirror/state';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Card } from 'antd';
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
    <PageContainer>
      <Card className="h-full">
        <CodeMirrorMerge orientation="a-b" revertControls="a-to-b" theme={githubLight} lang="plain">
          <Original value={doc} extensions={[EditorView.editable.of(true), EditorState.readOnly.of(false)]} />
          <Modified
            value={doc.replace(/t/g, 'T') + 'Six'}
            extensions={[EditorView.editable.of(true), EditorState.readOnly.of(false)]}
          />
        </CodeMirrorMerge>
      </Card>
    </PageContainer>
  );
};
