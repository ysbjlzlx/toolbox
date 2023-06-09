'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import FileSaver from 'file-saver';
import dynamic from 'next/dynamic';
import { ChangeEvent, useState } from 'react';
import { AceOptions } from 'react-ace/types';
import * as XLSX from 'xlsx';

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-json');
    await import('ace-builds/src-noconflict/theme-monokai');
    return ace;
  },
  { ssr: false },
);

const Input = styled('input')({
  display: 'none',
});

const options: AceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
};

export default function Page() {
  const [result, setResult] = useState<string>();

  const save = () => {
    if (!result || result === '') {
      return;
    }
    const t = Date.now();
    const file = new File([result], t + '.json', {
      type: 'text/plain;charset=utf-8',
    });
    FileSaver.saveAs(file);
  };

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
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
          const workbook = XLSX.read(data, { type: 'array' });
          console.log(workbook);
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_json(firstSheet) || [];
          setResult(JSON.stringify(rows, null, 2));
        };

        const file = files.item(i);
        if (file) {
          fileReader.readAsArrayBuffer(file);
        }
      }
    }
  };
  return (
    <PageContainer title="Excel 转 JSON">
      <Box sx={{ mt: 2 }}>
        <label htmlFor="contained-button-file">
          <Input accept=".xls,.xlsx,.csv" id="contained-button-file" multiple type="file" onChange={onUpload} />
          <Button variant="contained" component="span">
            上传 Excel
          </Button>
        </label>
        <Button onClick={save}>下载为 JSON 文件</Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <AceEditor mode="json" theme="monokai" width="100%" setOptions={options} value={result} />
      </Box>
    </PageContainer>
  );
}
