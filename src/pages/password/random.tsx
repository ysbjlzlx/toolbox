import { CheckCard, PageContainer } from "@ant-design/pro-components";
import { Divider, InputNumber, Slider } from "antd";
import { useEffect, useState } from "react";

import { RandomTextResult } from "@/components/RandomTextResult";
import { type GeneratePasswordOptions, generatePassword } from "@/lib/random-string-utils.ts";

const initialOptions: GeneratePasswordOptions = {
  length: 12,
  numbers: true,
  lowercase: true,
  uppercase: true,
  symbols: false,
  nolookalikes: true,
  includeAllTypes: true,
};
export const Random = () => {
  const [generatorOptions, setGeneratorOptions] = useState<GeneratePasswordOptions>(initialOptions);
  const [randomString, setRandomString] = useState<string>("");

  useEffect(() => {
    refresh(generatorOptions);
  }, [generatorOptions]);

  const refresh = (options = initialOptions) => {
    const varchar = generatePassword(options);
    setRandomString(varchar);
  };
  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg px-4 pt-4">
      <div>
        <CheckCard
          title="数字"
          description="0 ~ 9"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, numbers: checked });
          }}
        />
        <CheckCard
          title="小写字母"
          description="a ~ z"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, lowercase: checked });
          }}
        />
        <CheckCard
          title="大写字母"
          description="A ~ Z"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, uppercase: checked });
          }}
        />
        <CheckCard
          title="符号"
          description="! @ # $ % & * ( ) ."
          size={"small"}
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, symbols: checked });
          }}
        />
        <Divider />
        <CheckCard
          title="排除相似的字符"
          description="0 1 2 5 l o s u v I O S Z"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, nolookalikes: checked });
          }}
        />
        <CheckCard
          title="包含每一种字符"
          description="-"
          size={"small"}
          defaultChecked
          onChange={(checked) => {
            setGeneratorOptions({ ...generatorOptions, includeAllTypes: checked });
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
        <div>
          <RandomTextResult
            text={randomString}
            copyBtnText="复制密码"
            refreshBtnText="刷新密码"
            onClickRefreshBtn={() => {
              refresh(generatorOptions);
            }}
          />
        </div>
      </div>
    </PageContainer>
  );
};
