import { PageContainer } from "@ant-design/pro-components";
import { createId } from "@paralleldrive/cuid2";
import { TwitterSnowflake } from "@sapphire/snowflake";
import type { SegmentedProps } from "antd";
import { Button, Card, Segmented } from "antd";
import ObjectID from "bson-objectid";
import { nanoid } from "nanoid";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TextResultBox from "@/components/TextResultBox.tsx";

export const Component: FC = () => {
  const [type, setType] = useState<SegmentedProps["value"]>("cuid");
  const [result, setResult] = useState<string>("");

  const options: SegmentedProps["options"] = [
    { label: "Cuid2", value: "cuid" },
    { label: "BSON ObjectID", value: "objectid" },
    { label: "Nano ID", value: "nanoid" },
    { label: "UUID", value: "uuid" },
    { label: "Snowflake ID", value: "snowflakeid" },
  ];

  const generate = () => {
    if (type === "cuid") {
      setResult(createId);
    } else if (type === "objectid") {
      setResult(ObjectID().toHexString());
    } else if (type === "nanoid") {
      setResult(nanoid());
    } else if (type === "uuid") {
      setResult(uuidv4());
    } else if (type === "snowflakeid") {
      setResult(TwitterSnowflake.generate().toString());
    }
  };

  useEffect(() => {
    if (type === "cuid") {
      setResult(createId);
    } else if (type === "objectid") {
      setResult(ObjectID().toHexString());
    } else if (type === "nanoid") {
      setResult(nanoid());
    } else if (type === "uuid") {
      setResult(uuidv4());
    } else if (type === "snowflakeid") {
      setResult(TwitterSnowflake.generate().toString());
    }
  }, [type]);
  return (
    <PageContainer title={false} className="mx-auto max-w-screen-lg p-4">
      <Card>
        <Segmented block={true} options={options} value={type} onChange={(value) => setType(value)} />
        <div className="mt-4">
          <Button onClick={() => generate()}>刷新</Button>
        </div>
        <div className="mt-4">
          <TextResultBox title="结果" text={result} />
        </div>
      </Card>
    </PageContainer>
  );
};
