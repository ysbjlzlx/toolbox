import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import Quill from 'quill';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import CopyButtonWrapper from '@/components/CopyButtonWrapper.tsx';

import 'quill/dist/quill.snow.css';

export const Component: FC = () => {
  const [value, setValue] = useState<string>('');

  const quillRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      let quill = new Quill(node, {
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
  }, []);

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
