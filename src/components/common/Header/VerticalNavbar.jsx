import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { NAV_ITEMS } from 'app/constant';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderLogoutButton from './HeaderLogoutButton';

const drawerWidth = 260;

const VerticalNavbar = ({ isOpen, onToggleClick, isAuthenticated, onSignOut }) => {
  const container = document.querySelector('#root');

  const drawer = (
    <Box onClick={onToggleClick} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button sx={{ color: '#333' }} component={Link} to={item.href}>
                {item.label}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated ? (
          <ListItem>
            <HeaderLogoutButton onClick={onSignOut} />
          </ListItem>
        ) : (
          <ListItem>
            <HeaderLoginButton inverted />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Drawer
      container={container}
      variant='temporary'
      open={isOpen}
      onClose={onToggleClick}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default VerticalNavbar;
