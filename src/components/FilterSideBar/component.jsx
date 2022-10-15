import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const navItems = ['Cong viec', 'Hoc tap', 'Lo au', 'Gia dinh', 'Tinh cam', 'Xam hai'];
const FilterSideBar = () => {
  return (
    <Box sx={{ textAlign: 'left', width: 300, background: '#f5f5f5', p: 5, borderRadius: '10px' }}>
      <Typography variant='h5'>Danh muc</Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FilterSideBar;
