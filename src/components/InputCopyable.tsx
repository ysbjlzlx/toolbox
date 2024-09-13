import CopyTextButton from "@/components/CopyTextButton";
import { Input, Space } from "antd";

export interface Props {
  value?: string;
  tag?: string | null;
}

const InputCopyable = (props: Props) => {
  return (
    <div className="my-4">
      <Space.Compact block>
        <Input value={props.value || ""} addonBefore={props.tag} showCount />
        <CopyTextButton text={props.value} />
      </Space.Compact>
    </div>
  );
};

export default InputCopyable;
