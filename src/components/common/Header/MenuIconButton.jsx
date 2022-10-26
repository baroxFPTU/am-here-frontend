import { IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MenuIconButton = ({ onClick }) => {
  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={onClick}
      sx={{ display: { xs: 'flex', sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconButton;
