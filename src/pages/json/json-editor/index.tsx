import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';

import useJsonTabStore from '@/stores/JsonTabStore.ts';
import { PageContainer } from '@ant-design/pro-components';

import JsonEditor from './JsonEditor.tsx';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
const Page = () => {
  const { jsonTabs, activeKey, addJsonTab, removeJsonTab, setActiveKey } = useJsonTabStore();
  const [items, setItems] = useState<TabsProps['items']>([]);

  useEffect(() => {
    const item: TabsProps['items'] = jsonTabs.map((idx) => {
      return {
        key: idx,
        label: 'JSON Editor - ' + idx,
        closable: true,
        children: <JsonEditor idx={idx} />,
        className: 'h-[calc(100vh-112px)] md:h-[calc(100vh-56px)]',
      };
    });
    if (_.indexOf(jsonTabs, activeKey) === -1) {
      const lastItem = _.last(item);
      setActiveKey(lastItem?.key || '0');
    }

    setItems(item);
  }, [jsonTabs, activeKey, setActiveKey]);

  const onChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };
  const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const add = () => {
    let newActiveKey = '0';
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
      addJsonTab('0');
    }
  };

  return (
    <PageContainer title={false} className="w-full">
      <Tabs type="editable-card" size="small" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={items} />
    </PageContainer>
  );
};

export default Page;
