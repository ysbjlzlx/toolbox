import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import hljs from 'highlight.js';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import type { ReactQuillProps } from 'react-quill';
import ReactQuill from 'react-quill';

import CopyButtonWrapper from '@/components/CopyButtonWrapper.tsx';

import 'highlight.js/styles/monokai-sublime.css';
import 'react-quill/dist/quill.snow.css';

export const Component: FC = () => {
  const [value, setValue] = useState<string>('');

  const styles = {
    quill: {
      height: 'calc(100% - 42px)',
      backgroundColor: 'white',
    },
  };

  const quillProps: ReactQuillProps = {
    // eslint-disable-next-line max-params
    onChange: (value) => {
      setValue(value);
    },
    modules: {
      syntax: {
        highlight: useCallback((text: string) => {
          return hljs.highlightAuto(text).value;
        }, []),
      },
      toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        ['blockquote', 'code', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        ['link', 'image'],
      ],
    },
    formats: [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'code',
      'code-block',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'script',
      'background',
      'color',
      'align',
    ],
  };

  return (
    <PageContainer title={false}>
      <div className="m-4 flex h-[calc(100dvh-88px)] flex-col  md:h-[calc(100dvh-32px)]">
        <Card className="mb-4">
          <CopyButtonWrapper text={value}>复制源码</CopyButtonWrapper>
        </Card>
        <div className="flex-1">
          <ReactQuill
            theme="snow"
            defaultValue={value}
            modules={quillProps.modules}
            formats={quillProps.formats}
            onChange={quillProps.onChange}
            style={styles.quill}
          />
        </div>
      </div>
    </PageContainer>
  );
};
