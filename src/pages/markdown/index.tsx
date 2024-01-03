import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Vditor from 'vditor';

import { PageContainer } from '@ant-design/pro-components';
import 'vditor/dist/index.css';

const Markdown: FC = () => {
  const [, setVd] = useState<Vditor>();

  const toolbar: Array<string | IMenuItem> = [
    'headings',
    'bold',
    'italic',
    'strike',
    'link',
    '|',
    'list',
    'ordered-list',
    'check',
    'outdent',
    'indent',
    '|',
    'quote',
    'line',
    'code',
    'inline-code',
    'insert-before',
    'insert-after',
    '|',
    'table',
    '|',
    'undo',
    'redo',
    '|',
    'edit-mode',
    {
      name: 'more',
      toolbar: ['both', 'export', 'outline', 'preview', 'devtools', 'info', 'help'],
    },
  ];

  useEffect(() => {
    const vditor = new Vditor('vditor', {
      height: '100%',
      mode: 'sv',
      preview: {
        mode: 'both',
      },
      toolbar: toolbar,
      after: () => {
        vditor.setValue('`Vditor` 最小代码示例');
        setVd(vditor);
      },
    });
  }, []);
  return (
    <PageContainer title={false} token={{ paddingInlinePageContainerContent: 0 }}>
      <div className="mt-8 h-[calc(100vh-32px)]">
        <div id="vditor" className="vditor" />
      </div>
    </PageContainer>
  );
};

export default Markdown;
