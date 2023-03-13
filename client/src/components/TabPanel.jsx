import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useState } from 'react';

function TabPanel({ selectedTab, setSelectedTab, taskText }) {
  

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  };
  
  return (
    <Tabs value={selectedTab} onChange={handleChange} centered>
      <Tab label={taskText.all} value='all'></Tab>
      <Tab label={taskText.open} value='open'></Tab>
      <Tab label={taskText.completed} value='completed'></Tab>
      <Tab label={taskText.archived} value='archived'></Tab>
    </Tabs>
    )
}

export default TabPanel
