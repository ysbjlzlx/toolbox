import { Tabs } from 'antd';
import { Tab } from 'rc-tabs/lib/interface';
import { useEffect, useState } from 'react';

import { useLocalStorageState } from 'ahooks';
import _ from 'lodash';
import * as React from 'react';
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
    const keys = items.map((i) => {
      return Number(i.key);
    });
    const maxKey = Math.max(...keys);

    const newActiveKey = `${maxKey + 1}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'JSON Editor - ' + newActiveKey,
      children: <JsonEditor idx={newActiveKey} />,
      key: newActiveKey,
      style: {
        height: `calc(100vh - 56px)`,
      },
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
    setJsonTabs((oldValue: any) => {
      return [...oldValue, newActiveKey];
    });
  };

  const remove = (targetKey: TargetKey) => {
    localStorage.removeItem(`json-${targetKey}`);
    const item = _.remove(jsonTabs, (idx) => {
      return idx !== targetKey;
    });
    console.log(item);
    setJsonTabs(item);
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  return <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={items} />;
};

export default Json;
