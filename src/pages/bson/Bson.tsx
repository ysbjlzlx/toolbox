import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useRef, useState } from 'react';

import { useSize } from 'ahooks';
import BsonObjectId from './BsonObjectId';

const Bson = () => {
  const tabWrapperRef = useRef(null);
  const [currentTab, setCurrentTab] = useState<string>('0');
  const tabWrapperSize = useSize(tabWrapperRef);

  const handleChange = (_event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value);
  };

  return (
    <TabContext value={currentTab}>
      <Box ref={tabWrapperRef}>
        <TabList onChange={handleChange} aria-label="json tab panel">
          <Tab label="BSON Object ID" value="0" />
        </TabList>
      </Box>

      <TabPanel value={currentTab} sx={{ height: `calc(100% - ${tabWrapperSize?.height || 48}px)` }}>
        <BsonObjectId />
      </TabPanel>
    </TabContext>
  );
};

export default Bson;
