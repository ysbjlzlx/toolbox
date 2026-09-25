import { Card, Segmented, type SegmentedProps } from "antd";
import type { FC } from "react";

const segmentedOptions: SegmentedProps["options"] = [{ label: "Base-X", value: "base-x" }];
export const Component: FC = () => {
  return (
    <div className="p-4">
      <Card>
        <Segmented options={segmentedOptions} />
      </Card>
    </div>
  );
};
