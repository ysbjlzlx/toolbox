import { Button, Card, Divider, InputNumber, Slider, Typography } from "antd";
import { customAlphabet } from "nanoid";
import { numbers } from "nanoid-dictionary";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { useBoolean, useCopyToClipboard } from "usehooks-ts";

const random = customAlphabet(numbers, 6);

export const Pin: FC = () => {
  const [length, setLength] = useState<number>(6);
  const [value, setValue] = useState<string>("111");
  const { value: copied, setTrue, setFalse } = useBoolean(false);
  const [_ignored, copy] = useCopyToClipboard();

  useEffect(() => {
    setValue(random(length));
  }, [length]);

  const onClickCopyButton = () => {
    copy(value).then(() => {
      setTrue();
      setTimeout(() => {
        setFalse();
      }, 1000);
    });
  };

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
        <div className="mt-2 rounded-md border p-5 text-center">
          <span className="font-bold text-blue-500 text-lg">{value}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <Button type="primary" onClick={onClickCopyButton} block>
              {copied ? "已复制" : "复制密码"}
            </Button>
          </div>
          <div>
            <Button
              block
              onClick={() => {
                setValue(random(length));
              }}
            >
              刷新密码
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
