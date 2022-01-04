import React, {ChangeEvent, useState} from 'react';
import {Box, Container, Typography, Button} from '@mui/material';
import xlsx from 'xlsx';
import {styled} from '@mui/material/styles';
import {DataGrid} from '@mui/x-data-grid';

const Input = styled('input')({
  display: 'none',
});

export default function Excel() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

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
          if (rows) {
            // @ts-ignore
            for (const [key, value] of Object.entries(rows[0])) {
              console.log(`${key}: ${value}`);
            }
          }
          // @ts-ignore
          setRows(rows);
          console.log(firstSheet['!ref']);
          /* DO SOMETHING WITH workbook HERE */
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
      </Box>
      <Box sx={{mt: 2}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50, 100]}
          disableSelectionOnClick
          autoHeight
        />
      </Box>
    </Container>
  );
}
