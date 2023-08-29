'use client';

import { Tabs, TabsProps } from 'antd';

import YamlToJson from './YamlToJson';

const Page = () => {
  const items: TabsProps['items'] = [
    {
      key: 'yaml-to-json',
      label: 'Yaml To Json',
      children: <YamlToJson />,
      style: {
        height: `calc(100vh - 62px)`,
      },
    },
  ];

  return <Tabs defaultActiveKey={'yaml-to-json'} items={items} />;
};

export default Page;
