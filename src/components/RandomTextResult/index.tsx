"use client";

import type { FC } from "react";
import { useBoolean, useCopyToClipboard } from "usehooks-ts";
import { Button } from "@/components/ui/button";

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
      <div className="mt-2 rounded-md border p-5 text-center wrap-break-word">
        <span className="text-black-500 text-lg font-bold">{text}</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Button variant="default" onClick={onClickCopyBtn} className="w-full">
            {copied ? "已复制" : props.copyBtnText || "复制"}
          </Button>
        </div>
        <div>
          <Button variant="outline" onClick={onClickRefreshBtn} className="w-full">
            {props.refreshBtnText || "刷新"}
          </Button>
        </div>
      </div>
    </div>
  );
};
