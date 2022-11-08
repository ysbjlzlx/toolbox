import { Tabs, TabsValue } from '@mantine/core';
import { useSize } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import JSON from './JsonEditor';
import JsonToExcel from './JsonToExcel';
import JsonToYaml from './JsonToYaml';

const Json = () => {
  const tabWrapperRef = useRef(null);
  const [currentTab, setCurrentTab] = useState<string>('json-editor');
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const tabWrapperSize = useSize(tabWrapperRef);

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
    <Tabs radius="md" value={currentTab} onTabChange={handleChange} sx={{ height: '100%' }}>
      <Tabs.List ref={tabWrapperRef}>
        <Tabs.Tab value="json-editor"> {t('JSON Editor')} </Tabs.Tab>
        <Tabs.Tab value="json-to-yaml"> {t('JSON to YAML')} </Tabs.Tab>
        <Tabs.Tab value="json-to-excel" disabled>
          {t('JSON to Excel')}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="json-editor" sx={{ height: `calc(100% - ${tabWrapperSize?.height}px - 7px)`, marginTop: 5 }}>
        <JSON />
      </Tabs.Panel>

      <Tabs.Panel value="json-to-yaml" sx={{ height: `calc(100% - ${tabWrapperSize?.height}px - 2px)` }}>
        <JsonToYaml />
      </Tabs.Panel>

      <Tabs.Panel value="json-to-excel" sx={{ height: `calc(100% - ${tabWrapperSize?.height}px - 2px)` }}>
        <JsonToExcel />
      </Tabs.Panel>
    </Tabs>
  );
};

export default Json;
