import PageContainer from "@/components/ui/PageContainer.tsx";
import type { SelectProps } from "antd";
import { Card, InputNumber, Select, Space } from "antd";
import type { FC } from "react";
import { useEffect, useState } from "react";

const bitRateUnitOptions: SelectProps["options"] = [
  { label: "bps (bit/s)", value: "bps" },
  { label: "Kbps (Kilo bit/s)", value: "Kbps" },
  { label: "Mbps (Mega bit/s)", value: "Mbps" },
  { label: "Gbps (Giga bit/s)", value: "Gbps" },
];

const byteRateUnitOptions: SelectProps["options"] = [
  { label: "B/s", value: "B/s" },
  { label: "KiB/s", value: "KiB/s" },
  { label: "MiB/s", value: "MiB/s" },
  { label: "GiB/s", value: "GiB/s" },
];
export const Component: FC = () => {
  const [bitRateValue, setBitRateValue] = useState<number>(3000);
  const [bitRateUnit, setBitRateUnit] = useState<string>("Mbps");

  const [byteRateValue, setbyteRateValue] = useState<number>(0);
  const [byteRateUnit, setByteRateUnit] = useState<string>("MiB/s");

  useEffect(() => {
    let bit = 0;
    switch (bitRateUnit) {
      case "bps":
        bit = bitRateValue;
        break;
      case "Kbps":
        bit = bitRateValue * 1000;
        break;
      case "Mbps":
        bit = bitRateValue * 1000 * 1000;
        break;
      case "Gbps":
        bit = bitRateValue * 1000 * 1000 * 1000;
        break;
    }
    switch (byteRateUnit) {
      case "B/s":
        setbyteRateValue(bit / 8);
        break;
      case "KiB/s":
        setbyteRateValue(bit / 8 / 1024);
        break;
      case "MiB/s":
        setbyteRateValue(bit / 8 / 1024 / 1024);
        break;
      case "GiB/s":
        setbyteRateValue(bit / 8 / 1024 / 1024 / 1024);
        break;
    }
  }, [bitRateValue, bitRateUnit, byteRateUnit]);

  return (
    <PageContainer>
      <div className="h-full">
        <Card title="下载速度换算">
          <div className="grid max-w-screen-md grid-cols-1 gap-4 md:grid-cols-2">
            <Space.Compact className="w-full">
              <InputNumber
                type="number"
                value={bitRateValue}
                onChange={(val) => {
                  if (val) {
                    setBitRateValue(val);
                  }
                }}
                addonBefore="宽带大小"
                className="w-full"
              />
              <Select value={bitRateUnit} options={bitRateUnitOptions} onChange={setBitRateUnit} />
            </Space.Compact>
            <Space.Compact className="w-full">
              <InputNumber type="number" addonBefore="下载速度" value={byteRateValue} readOnly className="w-full" />
              <Select value={byteRateUnit} options={byteRateUnitOptions} onChange={setByteRateUnit} />
            </Space.Compact>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};
