import { RandomTextResult } from "@/components/RandomTextResult";
import { Card, Divider, InputNumber, Slider, Typography } from "antd";
import { customAlphabet } from "nanoid";
import { numbers } from "nanoid-dictionary";
import { useEffect, useState } from "react";
import type { FC } from "react";

const random = customAlphabet(numbers, 6);

export const Pin: FC = () => {
  const [length, setLength] = useState<number>(6);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(random(length));
  }, [length]);

  return (
    <Card>
      <div className="pt-6">
        <div>
          <Typography>
            <Typography.Text>自定义新密码</Typography.Text>
          </Typography>
        </div>
        <Divider />
        <div className="flex gap-4">
          <div className="w-6 flex-initial">长度</div>
          <div className="flex-auto">
            <Slider min={3} max={12} step={1} value={length} onChange={(val) => setLength(val)} />
          </div>
          <div className="w-24 flex-initial">
            <InputNumber
              min={3}
              max={12}
              value={length}
              onChange={(val) => {
                setLength(val || 6);
              }}
            />
          </div>
        </div>
        <Divider />
        <div>
          <Typography>
            <Typography.Text>生成密码</Typography.Text>
          </Typography>
        </div>
        <div>
          <RandomTextResult
            text={value}
            copyBtnText="复制密码"
            refreshBtnText="刷新密码"
            onClickRefreshBtn={() => {
              setValue(random(length));
            }}
          />
        </div>
      </div>
    </Card>
  );
};
