"use client";

import { Button } from "antd";
import type { FC } from "react";
import { useBoolean, useCopyToClipboard } from "usehooks-ts";

interface Props {
  text: string | undefined;
  onClickRefreshBtn?: () => void;
  copyBtnText?: string;
  refreshBtnText?: string;
}
export const RandomTextResult: FC<Props> = ({ text, onClickRefreshBtn, ...props }) => {
  const { value: copied, setTrue, setFalse } = useBoolean(false);
  const [_ignored, copy] = useCopyToClipboard();
  const onClickCopyBtn = () => {
    if (text && text.length > 0) {
      copy(text).then(() => {
        setTrue();
        setTimeout(() => {
          setFalse();
        }, 2000);
      });
    }
  };
  return (
    <div>
      <div className="mt-2 break-words rounded-md border p-5 text-center">
        <span className="font-bold text-blue-500 text-lg">{text}</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Button type="primary" onClick={onClickCopyBtn} block>
            {copied ? "已复制" : props.copyBtnText || "复制"}
          </Button>
        </div>
        <div>
          <Button block onClick={onClickRefreshBtn}>
            {props.refreshBtnText || "刷新"}
          </Button>
        </div>
      </div>
    </div>
  );
};
