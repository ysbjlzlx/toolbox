import { PageContainer } from '@/components/ui';
import { Card } from 'antd';
import Quill from 'quill';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import CopyTextButton from '@/components/CopyTextButton';

import 'quill/dist/quill.snow.css';

export const Component: FC = () => {
  const [value, setValue] = useState<string>('');

  const quillRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      let quill = new Quill(node, {
        modules: {
          toolbar: true,
        },
        theme: 'snow',
      });
      setValue(quill.getSemanticHTML());
      quill.on('text-change', () => {
        setValue(quill.getSemanticHTML());
      });
    }
  }, []);

  return (
    <PageContainer>
      <div className="flex h-full flex-col">
        <div>
          <Card className="mb-4">
            <CopyTextButton text={value} icon={false}>
              复制源码
            </CopyTextButton>
          </Card>
        </div>
        <div ref={quillRef} className="flex-1 overflow-auto rounded-b-[8px] bg-white">
          <h2>Demo Content</h2>
          <p>
            Preset build with <code>snow</code> theme, and some common formats.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};
