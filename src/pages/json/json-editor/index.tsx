import { PageContainer } from "@ant-design/pro-components";
import { Button, Dropdown, Space, Tabs } from "antd";
import type { MenuProps, TabsProps } from "antd";
import { indexOf, last } from "lodash-es";
import type React from "react";
import { useEffect, useState } from "react";

import Iconify from "@/components/Iconify";
import useJsonTabStore from "@/stores/JsonTabStore.ts";
import JsonEditor from "./JsonEditor.tsx";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
export const Component = () => {
  const { jsonTabs, activeKey, addJsonTab, removeJsonTab, setActiveKey } = useJsonTabStore();
  const [items, setItems] = useState<TabsProps["items"]>([]);

  useEffect(() => {
    const item: TabsProps["items"] = jsonTabs.map((idx) => {
      return {
        key: idx,
        label: `Tab ${idx}`,
        closable: true,
        children: <JsonEditor idx={idx} />,
        className: "h-[calc(100dvh-112px)] md:h-[calc(100dvh-56px)]",
      };
    });
    if (indexOf(jsonTabs, activeKey) === -1) {
      const lastItem = last(item);
      setActiveKey(lastItem?.key || "0");
    }

    setItems(item);
  }, [jsonTabs, activeKey, setActiveKey]);

  const onChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };
  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: "add" | "remove") => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const add = () => {
    let newActiveKey = "0";
    if (jsonTabs && jsonTabs.length > 0) {
      const keys = jsonTabs.map((i) => {
        return Number(i);
      });
      const maxKey = Math.max(...keys);

      newActiveKey = `${maxKey + 1}`;
    }
    addJsonTab(newActiveKey);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    removeJsonTab(String(targetKey));
    localStorage.removeItem(`json-${targetKey}`);
    if (jsonTabs && jsonTabs.length <= 1) {
      addJsonTab("0");
    }
  };

  const uploadMenu: MenuProps = {
    items: [
      {
        key: 1,
        label: <div>上传 JSON 文件</div>,
      },
      {
        key: 2,
        label: <div>上传 Excel 文件</div>,
      },
    ],
  };

  const downloadMenu: MenuProps = {
    items: [
      {
        key: 1,
        label: <div>下载为 JSON 文件</div>,
      },
      {
        key: 2,
        label: <div>下载为 Excel 文件</div>,
      },
    ],
  };
  const tabBarExtraContent: TabsProps["tabBarExtraContent"] = {
    left: (
      <div className="mx-4 hidden">
        <Space.Compact>
          <Dropdown menu={uploadMenu}>
            <Button icon={<Iconify icon="lucide:upload" />}>上传</Button>
          </Dropdown>
          <Dropdown menu={downloadMenu}>
            <Button icon={<Iconify icon="lucide:download" />}>下载</Button>
          </Dropdown>
        </Space.Compact>
      </div>
    ),
  };

  return (
    <PageContainer title={false} className="w-full">
      <Tabs
        type="editable-card"
        size="small"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        tabBarExtraContent={tabBarExtraContent}
      />
    </PageContainer>
  );
};
