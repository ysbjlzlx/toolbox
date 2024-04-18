import { Button, Card, Checkbox, Form, Select } from 'antd';
import { useState } from 'react';
import type { IAceOptions, ICommand } from 'react-ace';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-groovy';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';

import PageContainer from '@/components/ui/PageContainer.tsx';
import type { parser } from '@/utils/formatter.ts';
import { format } from '@/utils/formatter.ts';

export const Component = () => {
  const [options, setOptions] = useState<IAceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
    theme: 'ace/theme/monokai',
  });
  const [code, setCode] = useState<string>('');
  const [model, setModel] = useState<string>('json');

  const commands: ICommand[] = [
    {
      name: 'formatter',
      bindKey: { win: 'Ctrl-Alt-L', mac: 'Command-Option-L' },
      exec: (editor) => {
        format(editor.getValue(), model as parser).then((result: string) => {
          setCode(result);
        });
      },
    },
  ];

  const onChange = (newValue: string) => {
    setCode(newValue);
  };
  const onPrettier = () => {
    format(code, model as parser).then((result: string) => {
      setCode(result);
    });
  };

  return (
    <PageContainer className="h-[calc(100dvh-56px)] md:h-dvh">
      <div className="h-full">
        <Card>
          <Form onFinish={onPrettier} initialValues={{ remember: true }} layout="inline">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Select
                  defaultValue={model}
                  onChange={(value) => {
                    setModel(value);
                  }}
                  options={[
                    { label: 'JSON', value: 'json' },
                    { label: 'JSON5', value: 'json5' },
                    { label: 'YAML', value: 'yaml' },
                    { label: 'XML', value: 'xml' },
                    { label: 'Groovy', value: 'groovy' },
                  ]}
                  className="w-full"
                />
              </div>
              <div className="leading-8">
                <Checkbox
                  checked={options.wrap}
                  onChange={(event) => {
                    setOptions({ ...options, wrap: event.target.checked });
                  }}
                >
                  自动换行
                </Checkbox>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  格式化
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Card>
        <div className="mt-4 h-[calc(100%-96px)]">
          <AceEditor
            width="100%"
            height="100%"
            mode={model}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            setOptions={options}
            editorProps={{ $blockScrolling: true }}
            value={code}
            commands={commands}
            className="rounded-[8px]"
          />
        </div>
      </div>
    </PageContainer>
  );
};
