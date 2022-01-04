import React, {ChangeEvent, useState, useRef, useEffect} from 'react';
import {Box, Container, Typography, Button} from '@mui/material';
import xlsx from 'xlsx';
import {styled} from '@mui/material/styles';
import FileSaver from 'file-saver';

import JSONEditor, {JSONEditorOptions} from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.css';

const Input = styled('input')({
  display: 'none',
});

const options: JSONEditorOptions = {
  modes: ['code', 'view'],
  language: 'zh-CN',
  mode: 'code',
  search: true,
};

export default function Excel() {
  const jsonViewerRef = useRef<HTMLDivElement>();
  const [jsonViewer, setJsonViewer] = useState<JSONEditor>();
  const [result, setResult] = useState({});

  useEffect(() => {
    if (jsonViewerRef.current) {
      setJsonViewer(new JSONEditor(jsonViewerRef.current, options));
    }
  }, []);
  useEffect(() => {
    if (jsonViewer && result) {
      jsonViewer.set(result);
    }
  }, [jsonViewer, result]);

  const save = () => {
    if (!jsonViewer) {
      return;
    }
    const content = jsonViewer.getText();
    if (content === '{}' || content === '') {
      return;
    }
    const t = Date.now();
    const file = new File([content], t + '.json', {
      type: 'text/plain;charset=utf-8',
    });
    FileSaver.saveAs(file);
  };

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    console.log(event.target.value);
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const fileReader = new FileReader();
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
          if (!e.target) {
            return;
          }
          let data = e.target.result as ArrayBuffer;
          data = new Uint8Array(data);
          const workbook = xlsx.read(data, {type: 'array'});
          console.log(workbook);
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = xlsx.utils.sheet_to_json(firstSheet) || [];
          setResult(rows);
          // save(JSON.stringify(rows));
        };

        const file = files.item(i);
        if (file) {
          fileReader.readAsArrayBuffer(file);
        }
      }
    }
  };
  return (
    <Container>
      <Box sx={{mt: 2}}>
        <Typography variant={'h2'}>Excel 转 JSON</Typography>
      </Box>
      <Box sx={{mt: 2}}>
        <label htmlFor="contained-button-file">
          <Input
            accept=".xls,.xlsx,.csv"
            id="contained-button-file"
            multiple
            type="file"
            onChange={onUpload}
          />
          <Button variant="contained" component="span">
            上传 Excel
          </Button>
        </label>
        <Button onClick={save}>下载为 JSON 文件</Button>
      </Box>
      <Box sx={{mt: 2, height: '90vh'}} ref={jsonViewerRef} />
    </Container>
  );
}
