import React, { useEffect, useState } from 'react';

import AceEditor from 'react-ace';
import prettier from 'prettier/standalone';
import prettierBabelPlugin from 'prettier/parser-babel';

import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';

const CodeFormatter = () => {
  const [code, setCode] = useState<string>('');
  const [type, setType] = useState<string>('json5');
  const [model, setModel] = useState<string>('json5');
  useEffect(() => {
    setModel(type);
  }, [type, model]);
  const options = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: true,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
  };
  const onChange = (newValue: string) => {
    console.log(newValue);
    setCode(newValue);
  };
  const onPrettier = () => {
    console.log(code);
    const prettierStr = prettier.format(code, {
      parser: type,
      plugins: [prettierBabelPlugin],
    });
    setCode(prettierStr);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Box>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Box>
            <FormControl>
              <InputLabel id="type-select-label">类型</InputLabel>
              <Select
                labelId="type-select-label"
                label={'类型'}
                variant={'outlined'}
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <MenuItem value={'json'}>JSON</MenuItem>
                <MenuItem value={'json5'}>JSON5</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <Button variant={'contained'} onClick={onPrettier}>
                格式化
              </Button>
            </FormControl>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: 1 }}>
        <AceEditor
          width={'100%'}
          mode={model}
          theme="monokai"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          setOptions={options}
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      </Box>
    </Container>
  );
};

export default CodeFormatter;
