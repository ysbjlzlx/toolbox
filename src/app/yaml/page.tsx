import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useSize } from 'ahooks';
import React, { useRef, useState } from 'react';

import YamlToJson from './YamlToJson';

const Page = () => {
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
          <Tab label="Yaml To Json" value="0" />
        </TabList>
      </Box>

      <TabPanel value="0" sx={{ height: `calc(100% - ${tabWrapperSize?.height || 48}px - 1px)`, padding: 0 }}>
        <YamlToJson />
      </TabPanel>
    </TabContext>
  );
};

export default Page;
