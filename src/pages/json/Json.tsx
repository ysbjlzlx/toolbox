import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useSize } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import * as React from 'react';
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

  const handleChange = (_event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value || 'json-editor');
    setTabSearchParam(value || 'json-editor');
  };

  return (
    <TabContext value={currentTab}>
      <Box ref={tabWrapperRef}>
        <TabList onChange={handleChange}>
          <Tab value="json-editor" label={t('JSON Editor')} />
          <Tab value="json-to-yaml" label={t('JSON to YAML')} />
          <Tab value="json-to-excel" label={t('JSON to Excel')} disabled />
        </TabList>
      </Box>

      <TabPanel
        value="json-editor"
        sx={{ height: `calc(100% - ${tabWrapperSize?.height || 48}px)`, padding: 0, paddingTop: '5px' }}
      >
        <JSON />
      </TabPanel>

      <TabPanel value="json-to-yaml" sx={{ height: `calc(100% - ${tabWrapperSize?.height || 48}px)`, padding: 0 }}>
        <JsonToYaml />
      </TabPanel>

      <TabPanel
        value="json-to-excel"
        sx={{ height: `calc(100% - ${tabWrapperSize?.height || 48}px - 2px)`, padding: 0 }}
      >
        <JsonToExcel />
      </TabPanel>
    </TabContext>
  );
};

export default Json;
