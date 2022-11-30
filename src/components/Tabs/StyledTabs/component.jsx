import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const defaultTabs = [
  {
    id: 0,
    value: 0,
    label: 'Thông tin cá nhân',
  },
  { id: 1, value: 1, label: 'Thiết lập bảo mật' },
];

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const StyledTabs = ({ tabs = defaultTabs, onChange, currentIndex }) => {
  return (
    <>
      <Tabs value={currentIndex} onChange={onChange} centered>
        {tabs.map((tab, index) => (
          <Tab key={tab.id} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>
    </>
  );
};

export default StyledTabs;
