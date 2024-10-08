import { CheckCard, PageContainer } from "@ant-design/pro-components";
import { Button, Divider, Input, InputNumber, Slider, Space } from "antd";
import { useEffect, useState } from "react";

import CopyTextButton from "@/components/CopyTextButton";
import Iconify from "@/components/Iconify";
import type { GeneratorOptions } from "@/scripts/RandomStringUtils.ts";
import { generator } from "@/scripts/RandomStringUtils.ts";

const initialOptions: GeneratorOptions = {
  numeric: true,
  lowercase: true,
  uppercase: true,
  symbol: false,
  symbolChars: "!@#$%^&*",
  length: 12,
};
export const Random = () => {
  const [generatorOptions, setGeneratorOptions] = useState<GeneratorOptions>(initialOptions);
  const [randomString, setRandomString] = useState<string>("");

  useEffect(() => {
    refresh(generatorOptions);
  }, [generatorOptions]);

  const refresh = (options: GeneratorOptions = initialOptions) => {
    const varchar = generator(options);
    setRandomString(varchar);
  };
  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg px-4 pt-4">
      <div>
        <CheckCard
          title="数字 0 ～ 9"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, numeric: checked });
          }}
        />
        <CheckCard
          title="小写字母 a ~ z"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, lowercase: checked });
          }}
        />
        <CheckCard
          title="大写字母 A ~ Z"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, uppercase: checked });
          }}
        />
        <CheckCard
          title="符号 ! @ # $ % ^ & *"
          size={"small"}
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, symbol: checked });
          }}
        />
        <Divider />
        <div className="flex gap-4">
          <div className="w-6 flex-initial">长度</div>
          <div className="flex-auto">
            <Slider
              min={6}
              max={64}
              step={1}
              marks={{ 6: "6", 8: "8", 12: "12", 16: "16", 32: "32", 64: "64" }}
              value={generatorOptions.length}
              onChange={(val) => setGeneratorOptions({ ...generatorOptions, length: val })}
            />
          </div>
          <div className="w-24 flex-initial">
            <InputNumber
              min={6}
              max={64}
              value={generatorOptions.length}
              onChange={(val) => {
                setGeneratorOptions({ ...generatorOptions, length: val || 8 });
              }}
            />
          </div>
        </div>
        <Divider />
        <div className="flex">
          <Input value={randomString} showCount className="mr-2 flex-auto" />
          <Space.Compact className="flex-none">
            <Button
              icon={<Iconify icon="lucide:refresh-ccw" />}
              onClick={() => {
                refresh(generatorOptions);
              }}
            />
            <CopyTextButton text={randomString} />
          </Space.Compact>
        </div>
      </div>
    </PageContainer>
  );
};
