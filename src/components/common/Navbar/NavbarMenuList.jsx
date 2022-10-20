import { Box } from '@mui/material';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const NavbarMenuList = ({ listItems }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {listItems.map((item, index) => (
        <Button key={index} sx={{ color: '#333' }} component={Link} to={item.href}>
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default memo(NavbarMenuList);
