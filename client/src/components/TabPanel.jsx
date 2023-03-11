import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function TabPanel({ handleClick }) {
  const [value, setValue] = useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleClick(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab sx={{color: '#e8eaf6'}} label="All" value={'all'}></Tab>
      <Tab sx={{color: '#e8eaf6'}} label="Open" value={'open'}></Tab>
      <Tab sx={{color: '#e8eaf6'}} label="Completed" value={'completed'}></Tab>
      <Tab sx={{color: '#e8eaf6'}} label="Archived" value={'archived'}></Tab>
    </Tabs>
    )
}

export default TabPanel
