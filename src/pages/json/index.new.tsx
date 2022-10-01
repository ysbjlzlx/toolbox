import { Tabs, TabsValue } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import JSON from './JsonEditor';
import JsonToYaml from './JsonToYaml';

const Json = () => {
  const [currentTab, setCurrentTab] = useState<string>('json-editor');
  const [tabWrapperHeight, setTabWrapperHeight] = useState<number>(48);
  const [searchParams, setSearchParams] = useSearchParams();

  const tabWrapperRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      setTabWrapperHeight(node.clientHeight);
    }
  }, []);

  const setTabSearchParam = (name: string) => {
    searchParams.set('tab', name);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    let tab = searchParams.get('tab');
    if (!tab) {
      searchParams.set('tab', 'json-editor');
      setSearchParams(searchParams);
    } else {
      setCurrentTab(tab);
    }
  }, [searchParams, setSearchParams]);

  const handleChange = (value: TabsValue) => {
    setCurrentTab(value || 'json-editor');
    setTabSearchParam(value || 'json-editor');
  };

  return (
    <Tabs variant="outline" radius="md" value={currentTab} onTabChange={handleChange} sx={{ height: '100%' }}>
      <Tabs.List ref={tabWrapperRef}>
        <Tabs.Tab value="json-editor"> Json Editor </Tabs.Tab>
        <Tabs.Tab value="json-to-yaml"> Json To Yaml </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="json-editor" sx={{ height: `calc(100% - ${tabWrapperHeight}px - 5px)`, marginTop: 5 }}>
        <JSON />
      </Tabs.Panel>

      <Tabs.Panel value="json-to-yaml" sx={{ height: `calc(100% - ${tabWrapperHeight}px)` }}>
        <JsonToYaml />
      </Tabs.Panel>
    </Tabs>
  );
};

export default Json;
