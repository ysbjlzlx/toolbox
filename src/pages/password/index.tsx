import { PageContainer } from "@ant-design/pro-components";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";

import { Pin } from "./pin";

export const Component = () => {
  const tabsItems: TabsProps["items"] = [{ label: "# PIN", key: "pin", children: <Pin /> }];
  return (
    <PageContainer title="密码" className="p-4">
      <Card>
        <Tabs items={tabsItems} />
      </Card>
    </PageContainer>
  );
};
