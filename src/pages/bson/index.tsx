import { Tab, Tabs } from '@mui/material';
import React, { useCallback, useState } from 'react';

import TabPanel from '../../components/TabPanel';
import BsonObjectId from './BsonObjectId';

const Json = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabWrapperHeight, setTabWrapperHeight] = useState<number>(48);

  const tabWrapperRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      setTabWrapperHeight(node.clientHeight);
    }
  }, []);

  const a11yProps = (index: number) => {
    return {
      id: `json-tab-${index}`,
      'aria-controls': `json-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <div ref={tabWrapperRef}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="json tab panel">
          <Tab label="BSON Object ID" {...a11yProps(0)} />
        </Tabs>
      </div>

      <TabPanel value={currentTab} index={0} sx={{ height: `calc(100% - ${tabWrapperHeight}px)` }}>
        <BsonObjectId />
      </TabPanel>
    </>
  );
};

export default Json;
