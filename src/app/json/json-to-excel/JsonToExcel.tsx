'use client';

import { Box } from '@mui/material';
import JSON5 from 'json5';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { AceOptions } from 'react-ace/types';
import ReactDataSheet from 'react-datasheet';

import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/mode-json5';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/theme-textmate';
import 'react-datasheet/lib/react-datasheet.css';

export interface GridElement extends ReactDataSheet.Cell<GridElement, number | string | null> {
  value: number | string | null;
}

const JsonToExcel = () => {
  const [json, setJson] = useState<string>('{}');
  const [data, setData] = useState<GridElement[][]>([]);
  const [jsonOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });
  useEffect(() => {
    try {
      const result = JSON5.parse(json);
      console.log(result);
      if (Array.isArray(result)) {
        let columns: any[] = [];
        result.forEach((item) => {
          const keys = Object.keys(item);
          keys.forEach((key) => {
            columns.push({ value: key, readOnly: true });
          });
        });
        columns = _.uniqWith(columns, (a, b) => {
          return a.value === b.value;
        });

        const rows: any[] = [];
        result.forEach((item) => {
          const row = columns.map((column) => {
            const value = item[column.value] || null;
            return { value, readOnly: true };
          });
          rows.push(row);
        });
        // @ts-ignore
        setData([columns, ...rows]);
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.error(e.message);
      }
    }
  }, [json]);

  return (
    <Box>
      <Box sx={{ width: '100%', height: '300px' }}>
        <AceEditor
          theme="textmate"
          placeholder="JSON"
          setOptions={jsonOptions}
          value={json}
          onChange={setJson}
          mode="json5"
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={{ mt: 3, width: '100%' }}>
        <ReactDataSheet data={data} valueRenderer={(cel) => cel.value} />
      </Box>
    </Box>
  );
};

export default JsonToExcel;
