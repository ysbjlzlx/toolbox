import { Button, Card, Checkbox, Form, Select } from 'antd';
import { useState } from 'react';
import type { ICommand } from 'react-ace';
import AceEditor from 'react-ace';
import type { AceOptions } from 'react-ace/types';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-groovy';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-monokai';

import type { parser } from '@/utils/formatter.ts';
import { format } from '@/utils/formatter.ts';
import { PageContainer } from '@ant-design/pro-components';

const CodeFormatter = () => {
  const [options, setOptions] = useState<AceOptions>({
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
    <PageContainer title={false}>
      <div className="h-[calc(100vh-56px)] p-4 md:h-screen">
        <Card>
          <Form onFinish={onPrettier} initialValues={{ remember: true }} layout="inline">
            <Form.Item label="类型" colon={false}>
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
                className="w-[100px]"
              />
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox
                checked={options.wrap}
                onChange={(event) => {
                  setOptions({ ...options, wrap: event.target.checked });
                }}
              >
                自动换行
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                格式化
              </Button>
            </Form.Item>
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
          />
        </div>
      </div>
    </PageContainer>
  );
};
export default CodeFormatter;
