import { Input, QRCode, Space } from "antd";
import type { TOTP } from "otpauth";

import CopyTextButton from "@/components/CopyTextButton";
import TokenField from "./TokenField.tsx";

interface Props {
  totp?: TOTP;
}

const TotpCard = ({ totp }: Props) => {
  return (
    <div>
      <div>
        <QRCode value={totp?.toString() || "-"} style={{ width: 128, height: 128 }} />
      </div>
      <div className="mt-4">
        <TokenField totp={totp} />
      </div>

      <div className="mt-4">
        <Space.Compact className="w-full">
          <Input value={totp?.toString() || ""} />
          <CopyTextButton text={totp?.toString()} />
        </Space.Compact>
      </div>
    </div>
  );
};
export default TotpCard;
