import { Tabs } from 'antd';
import { Tab } from 'rc-tabs/lib/interface';
import { useState } from 'react';

import JsonEditor from './JsonEditor';

const Json = () => {
  // {{ height: `calc(100% - ${tabWrapperSize?.height || 48}px)`, padding: 0, paddingTop: '5px' }}
  const item: Tab = {
    key: 'json',
    label: 'JSON Editor',
    closable: false,
    children: <JsonEditor />,
    style: {
      height: `calc(100vh - 56px)`,
    },
  };
  const [activeKey, setActiveKey] = useState<string>('json');
  const [items, setItems] = useState<Tab[]>([item]);

  const onChange = (activeKey: string) => {
    setActiveKey(activeKey);
  };
  const onEdit = () => {};

  return <Tabs type="card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={items} />;
};

export default Json;
