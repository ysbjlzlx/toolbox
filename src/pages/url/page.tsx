import { PageContainer } from "@/components/ui";
import { Button, Card, Input, Space } from "antd";
import type { FC } from "react";
import { useState } from "react";

import TextResultBox from "@/components/TextResultBox.tsx";

export const Component: FC = () => {
  const [uri, setUri] = useState<string>("");
  const [encodedURI, setEncodedURI] = useState<string>("");

  const handleEncodeURIComponent = () => {
    setEncodedURI(encodeURIComponent(uri));
  };

  const handleDecodeURIComponent = () => {
    setEncodedURI(decodeURIComponent(uri));
  };

  return (
    <PageContainer>
      <div className="mx-auto max-w-screen-lg">
        <Card>
          <div>
            <Input.TextArea
              rows={5}
              value={uri}
              placeholder="URL"
              onChange={(e) => {
                setUri(e.target.value);
              }}
              showCount
            />
          </div>
          <div className="mt-4">
            <Space.Compact>
              <Button onClick={handleEncodeURIComponent}>编码</Button>
              <Button onClick={handleDecodeURIComponent}>解码</Button>
            </Space.Compact>
          </div>
          <div className="mt-4">
            <TextResultBox title="结果" text={encodedURI} />
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};
