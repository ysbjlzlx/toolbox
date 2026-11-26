import { InputNumber, Slider } from "antd";
import { useEffect, useState } from "react";

import { RandomTextResult } from "@/components/RandomTextResult";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
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

  const refresh = (options = initialOptions) => {
    const varchar = generatePassword(options);
    setRandomString(varchar);
  };

  useEffect(() => {
    const varchar = generatePassword(generatorOptions);
    setRandomString(varchar);
  }, [generatorOptions]);

  return (
    <div>
      <FieldGroup className="md:grid md:grid-cols-4 md:gap-4">
        <Field orientation="horizontal">
          <Checkbox
            id="option-number"
            name="option-number"
            defaultChecked
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, numbers: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-number">数字</FieldLabel>
            <FieldDescription>0 ~ 9</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="option-lowercase"
            name="option-lowercase"
            defaultChecked
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, lowercase: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-lowercase">小写字母</FieldLabel>
            <FieldDescription>a ~ z</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="option-uppercase"
            name="option-uppercase"
            defaultChecked
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, uppercase: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-uppercase">大写字母</FieldLabel>
            <FieldDescription>A ~ Z</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="option-symbols"
            name="option-symbols"
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, symbols: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-symbols">符号</FieldLabel>
            <FieldDescription>! @ # $ % & * ( ) .</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>

      <Separator className="my-8" />
      <FieldGroup className="md:grid md:grid-cols-2 md:gap-4">
        <Field orientation="horizontal">
          <Checkbox
            id="option-nolookalikes"
            name="option-nolookalikes"
            defaultChecked
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, nolookalikes: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-nolookalikes">排除相似的字符</FieldLabel>
            <FieldDescription>0 1 2 5 l o s u v I O S Z</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="option-includeAllTypes"
            name="option-includeAllTypes"
            defaultChecked
            onCheckedChange={(checked) => {
              setGeneratorOptions({ ...generatorOptions, includeAllTypes: checked });
            }}
          />
          <FieldContent>
            <FieldLabel htmlFor="option-includeAllTypes">包含每一种字符</FieldLabel>
          </FieldContent>
        </Field>
      </FieldGroup>
      <Separator className="my-4" />
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
      <Separator className="my-4" />
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
  );
};
