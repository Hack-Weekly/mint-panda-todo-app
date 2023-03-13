import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useState } from 'react';

function TabPanel({ selectedTab, setSelectedTab }) {
  

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  };
  
  return (
    <Tabs value={selectedTab} onChange={handleChange} centered>
      <Tab label="All" value='all'></Tab>
      <Tab label="Open" value='open'></Tab>
      <Tab label="Completed" value='completed'></Tab>
      <Tab label="Archived" value='archived'></Tab>
    </Tabs>
    )
}

export default TabPanel
