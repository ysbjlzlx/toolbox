import { useLocalStorageState } from 'ahooks';
import { Tabs } from 'antd';
import _ from 'lodash';
import { Tab } from 'rc-tabs/lib/interface';
import * as React from 'react';
import { useEffect, useState } from 'react';

import JsonEditor from './JsonEditor';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
const Json = () => {
  const [jsonTabs, setJsonTabs] = useLocalStorageState<string[]>(`json-tabs`, { defaultValue: ['0'] });
  // {{ height: `calc(100% - ${tabWrapperSize?.height || 48}px)`, padding: 0, paddingTop: '5px' }}

  const [activeKey, setActiveKey] = useState<string>('0');
  const [items, setItems] = useState<Tab[]>([]);

  useEffect(() => {
    const item = jsonTabs.map((idx, i) => {
      return {
        key: idx,
        label: 'JSON Editor - ' + idx,
        closable: i !== 0,
        children: <JsonEditor idx={idx} />,
        style: {
          height: `calc(100vh - 56px)`,
        },
      };
    });
    setActiveKey(item[0].key);
    setItems(item);
  }, [jsonTabs]);

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
    const keys = jsonTabs.map((i) => {
      return Number(i);
    });
    const maxKey = Math.max(...keys);

    const newActiveKey = `${maxKey + 1}`;

    setJsonTabs((oldValue: any) => {
      return [...oldValue, newActiveKey];
    });
  };

  const remove = (targetKey: TargetKey) => {
    const item = _.without(jsonTabs, String(targetKey));
    setJsonTabs(item);
    localStorage.removeItem(`json-${targetKey}`);
  };

  return <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={items} />;
};

export default Json;
