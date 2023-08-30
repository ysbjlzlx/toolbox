import type { TabsProps } from 'antd';
import { Tabs } from 'antd';

import YamlToJson from './YamlToJson.tsx';

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

  return <Tabs defaultActiveKey="yaml-to-json" items={items} />;
};

export default Page;
