import type { ButtonProps } from "antd";
import { App, Button } from "antd";
import copy from "copy-to-clipboard";
import { Copy as CopyIcon } from "lucide-react";
import type React from "react";
import type { FC } from "react";

interface Props extends ButtonProps {
  text?: string | null;
  children?: React.ReactNode;
}

const CopyTextButton: FC<Props> = ({ text, children, ...props }) => {
  const { message } = App.useApp();
  const onClick = () => {
    if (text) {
      copy(text, {
        format: "text/plain",
        onCopy: (_clipboardData: object) => {
          message.success("复制成功");
        },
      });
    }
  };
  return (
    <Button icon={<CopyIcon size={16} />} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CopyTextButton;
