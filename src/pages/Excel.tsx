import React, {ChangeEvent} from 'react';
import {Box, Container, Typography, Button} from '@mui/material';
import xlsx from 'xlsx';
import {styled} from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function Excel() {
  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    console.log(event.target.value);
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const fileReader = new FileReader();
        fileReader.onload = function (e: ProgressEvent<FileReader>) {
          if (!e.target) {
            return;
          }
          let data = e.target.result as ArrayBuffer;
          data = new Uint8Array(data);
          const workbook = xlsx.read(data, {type: 'array'});
          console.log(workbook);
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
        <Typography>Excel</Typography>
      </Box>
      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept=".xls,.xlsx,.csv"
            id="contained-button-file"
            multiple
            type="file"
            onChange={onUpload}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Box>
    </Container>
  );
}
