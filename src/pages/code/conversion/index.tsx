import type { SelectProps } from "antd";
import { Button, Card, Select } from "antd";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as LosslessJSON from "lossless-json";
import { useState } from "react";
import type { IAceOptions } from "react-ace";
import AceEditor from "react-ace";
import YAML from "yaml";

import Iconify from "@/components/Iconify";
import PageContainer from "@/components/ui/PageContainer.tsx";
import { format } from "@/utils/formatter.ts";

import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-monokai";

const CodeTypeOptions: SelectProps["options"] = [
  { label: "JSON", value: "json" },
  { label: "YAML", value: "yaml" },
  { label: "XML", value: "xml" },
];

const options: IAceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
  showLineNumbers: true,
};

const targetAceEditorOptions: IAceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
  showLineNumbers: true,
};
export const Component = () => {
  const [sourceType, setSourceType] = useState<string>("json");
  const [targetType, setTargetType] = useState<string>("yaml");
  const [sourceValue, setSourceValue] = useState<string>("");
  const [targetValue, setTargetValue] = useState<string>("");

  const onClickSyncAltBtn = () => {
    const targetTypeTmp = targetType;
    setTargetType(sourceType);
    setSourceType(targetTypeTmp);
  };
  const onClickConversionBtn = () => {
    if (sourceValue === undefined || sourceValue === "") {
      return;
    }

    let sourceObj = null;

    // 解析 source
    try {
      if (sourceType === "json") {
        sourceObj = LosslessJSON.parse(sourceValue, null, LosslessJSON.parseNumberAndBigInt);
      } else if (sourceType === "yaml") {
        sourceObj = YAML.parse(sourceValue, { intAsBigInt: true });
      } else if (sourceType === "xml") {
        const xmlParser = new XMLParser();
        sourceObj = xmlParser.parse(sourceValue);
      }
    } catch (e) {
      alert(e);
    }

    // 设置 target
    try {
      if (targetType === "yaml") {
        format(YAML.stringify(sourceObj), "yaml").then((val) => {
          setTargetValue(val);
        });
      } else if (targetType === "json") {
        format(LosslessJSON.stringify(sourceObj) || "", "json").then((val) => {
          setTargetValue(val);
        });
      } else if (targetType === "xml") {
        const xmlBuilder = new XMLBuilder({
          ignoreAttributes: false,
          format: true,
          oneListGroup: true,
          suppressEmptyNode: true,
        });
        setTargetValue(xmlBuilder.build(sourceObj));
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <PageContainer className="h-[calc(100dvh-56px)] md:h-dvh">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col">
        <Card>
          <div className="flex gap-4">
            <div className="max-w-[150px] flex-auto">
              <Select options={CodeTypeOptions} value={sourceType} onSelect={setSourceType} className="w-full" />
            </div>
            <div className="flex-auto flex-shrink-0 flex-grow-0">
              <Button icon={<Iconify icon="material-symbols:sync-alt" />} onClick={onClickSyncAltBtn} />
            </div>
            <div className="max-w-[150px] flex-auto">
              <Select options={CodeTypeOptions} value={targetType} onSelect={setTargetType} className="w-full" />
            </div>
            <div className="flex-auto">
              <Button onClick={onClickConversionBtn}>转换</Button>
            </div>
          </div>
        </Card>
        <div className="mt-4 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 ">
          <div>
            <AceEditor
              mode={sourceType}
              theme="monokai"
              width="100%"
              height=""
              className="h-full rounded-[8px]"
              setOptions={options}
              value={sourceValue}
              onChange={setSourceValue}
            />
          </div>
          <div>
            <AceEditor
              mode={targetType}
              theme="monokai"
              width="100%"
              height=""
              className="h-full rounded-[8px]"
              setOptions={targetAceEditorOptions}
              value={targetValue}
              onChange={setTargetValue}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
