'use client';

import { PageContainer } from '@ant-design/pro-components';
import { Box } from '@mui/system';
import type { UploadProps } from 'antd';
import { Button, Space, Upload } from 'antd';
import FileSaver from 'file-saver';
import { useState } from 'react';
import type { AceOptions } from 'react-ace/types';
import * as XLSX from 'xlsx';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

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
  const uploadProps: UploadProps = {
    showUploadList: false,
    beforeUpload: async () => {
      return false;
    },
    onChange: (info) => {
      const files = info.fileList;
      if (files) {
        for (const key in files) {
          if (Object.prototype.hasOwnProperty.call(files, key)) {
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
            const file = files[key];
            if (file) {
              fileReader.readAsArrayBuffer(file.originFileObj as File);
            }
          }
        }
      }
    },
  };
  return (
    <PageContainer title="Excel 转 JSON">
      <Box>
        <Space direction="horizontal">
          <Upload {...uploadProps}>
            <Button type="primary">上传 Excel</Button>
          </Upload>
          <Button onClick={save}>下载为 JSON 文件</Button>
        </Space>
      </Box>

      <Box sx={{ mt: 2 }}>
        <AceEditor mode="json" theme="monokai" width="100%" setOptions={options} value={result} />
      </Box>
    </PageContainer>
  );
}
