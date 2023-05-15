import { Box } from '@mui/material';
import { useCallback, useState } from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import CopyButtonWrapper from '../../components/CopyButtonWrapper';

const Writer = () => {
  const [value, setValue] = useState<string>('');

  const styles = {
    quill: {
      height: '700px',
    },
  };

  const quillProps: ReactQuillProps = {
    // eslint-disable-next-line max-params
    onChange: (value, delta, source, editor) => {
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
    <Box>
      <Box>
        <CopyButtonWrapper text={value}>复制源码</CopyButtonWrapper>
      </Box>
      <Box>
        <ReactQuill
          theme="snow"
          defaultValue={value}
          modules={quillProps.modules}
          formats={quillProps.formats}
          onChange={quillProps.onChange}
          style={styles.quill}
        />
      </Box>
    </Box>
  );
};
export default Writer;
