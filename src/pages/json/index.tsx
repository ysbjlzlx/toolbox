import { Tab, Tabs } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TabPanel from '../../components/TabPanel';
import JSON from './JsonEditor';
import JsonToYaml from './JsonToYaml';

const Json = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
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
      setTabSearchParam('json-editor');
    }
    switch (tab) {
      case 'json-to-yaml':
        setCurrentTab(1);
        break;
      default:
        setCurrentTab(0);
        break;
    }
  }, [searchParams]);

  const a11yProps = (index: number) => {
    return {
      id: `json-tab-${index}`,
      'aria-controls': `json-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    switch (newValue) {
      case 1:
        setTabSearchParam('json-to-yaml');
        break;
      default:
        setTabSearchParam('json-editor');
        break;
    }
  };

  return (
    <>
      <div ref={tabWrapperRef}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="json tab panel">
          <Tab label="Json Editor" {...a11yProps(0)} />
          <Tab label="Json To Yaml" {...a11yProps(1)} />
        </Tabs>
      </div>

      <TabPanel value={currentTab} index={0} sx={{ height: `calc(100% - ${tabWrapperHeight}px)` }}>
        <JSON />
      </TabPanel>

      <TabPanel value={currentTab} index={1} sx={{ height: `calc(100% - ${tabWrapperHeight}px)` }}>
        <JsonToYaml />
      </TabPanel>
    </>
  );
};

export default Json;
