import { PageContainer } from "@ant-design/pro-components";
import { Card } from "antd";
import type { CardProps } from "antd";
import { useState } from "react";
import type React from "react";

import Iconify from "@/components/Iconify";
import { Pin } from "./pin";
import { Random } from "./random";

const tabList: CardProps["tabList"] = [
  { label: "# PIN", key: "pin" },
  {
    label: (
      <span>
        <Iconify icon="lucide:shuffle" /> 随机
      </span>
    ),
    key: "random",
  },
];

export const Component = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>("pin");

  const contentList: Record<string, React.ReactNode> = {
    pin: <Pin />,
    random: <Random />,
  };

  const onTabChange: CardProps["onTabChange"] = (key) => {
    setActiveTabKey(key);
  };

  return (
    <PageContainer title="密码" className="p-4">
      <Card tabList={tabList} onTabChange={onTabChange} activeTabKey={activeTabKey}>
        {contentList[activeTabKey]}
      </Card>
    </PageContainer>
  );
};
