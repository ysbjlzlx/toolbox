import JSON5 from 'json5';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import type { IAceOptions } from 'react-ace';
import AceEditor from 'react-ace';
import ReactDataSheet from 'react-datasheet';

import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-textmate';

import 'react-datasheet/lib/react-datasheet.css';

export interface GridElement extends ReactDataSheet.Cell<GridElement, number | string | null> {
  value: number | string | null;
}

export const Component = () => {
  const [json, setJson] = useState<string>('{}');
  const [data, setData] = useState<GridElement[][]>([]);
  const [jsonOptions] = useState<IAceOptions>({
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
    <div>
      <div className="h-[300px] w-full">
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
      </div>
      <div className="mt-6 w-full">
        <ReactDataSheet data={data} valueRenderer={(cel) => cel.value} />
      </div>
    </div>
  );
};
