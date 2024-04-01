import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import Quill from 'quill';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import CopyButtonWrapper from '@/components/CopyButtonWrapper.tsx';

import 'quill/dist/quill.snow.css';

export const Component: FC = () => {
  const [value, setValue] = useState<string>('');
  const quillRef = useRef<HTMLDivElement>(null);

  let init = 0;

  useEffect(() => {
    if (quillRef && quillRef.current && init === 0) {
      init = 1;
      let quill = new Quill(quillRef.current, {
        debug: 'info',
        modules: {
          toolbar: true,
        },
        theme: 'snow',
      });
      quill.on('text-change', () => {
        setValue(quill.getSemanticHTML());
      });
    }
  }, [quillRef]);

  return (
    <PageContainer title={false}>
      <div>
        <Card className="mb-4">
          <CopyButtonWrapper text={value}>复制源码</CopyButtonWrapper>
        </Card>
        <div ref={quillRef}>
          <h2>Demo Content</h2>
          <p>
            Preset build with <code>snow</code> theme, and some common formats.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};
