import { Box } from '@mui/material';
import { Button, Checkbox, Form, Select } from 'antd';
import { useState } from 'react';
import AceEditor, { ICommand } from 'react-ace';
import { AceOptions } from 'react-ace/types';
import { format, parser } from '../../utils/formatter';

import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-json5';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/theme-monokai';

const Formatter = () => {
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
        const result = format(editor.getValue(), model as parser);
        setCode(result);
      },
    },
  ];

  const onChange = (newValue: string) => {
    setCode(newValue);
  };
  const onPrettier = (values: any) => {
    const result = format(code, model as parser);
    setCode(result);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ pt: 2, pb: 1, pl: 1 }}>
        <Form onFinish={onPrettier} initialValues={{ remember: true }} layout="inline">
          <Form.Item label="类型">
            <Select
              defaultValue={model}
              onChange={(value) => {
                setModel(value);
              }}
              options={[
                { label: 'JSON', value: 'json' },
                { label: 'JSON5', value: 'json5' },
                { label: 'YAML', value: 'yaml' },
              ]}
              style={{ width: 100 }}
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
      </Box>
      <AceEditor
        width="100%"
        height="calc(100% - 56px)"
        mode={model}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        setOptions={options}
        editorProps={{ $blockScrolling: true }}
        value={code}
        commands={commands}
      />
    </Box>
  );
};
export default Formatter;
