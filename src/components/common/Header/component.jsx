import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { selectUser } from 'features/auth/authSlice';
import useAuth from 'features/auth/useAuth';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import AccountTooltip from './AccountTooltip';

const drawerWidth = 240;

const navItems = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Về chúng tôi',
    href: '/about-us',
  },
  {
    label: 'Phòng chat',
    href: '/chat',
  },
];

const Header = () => {
  const currentUser = useSelector(selectUser);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isShowAccountTooltip = Boolean(anchorEl);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth/login');
    } catch (error) {}
  };

  const handleClickAvatar = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseAccountTooltip = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const getFirstLetter = (str) => {
    return str?.charAt(0) || null;
  };
  const container = document.querySelector('#root');
  return (
    <>
      <AppBar component='nav' style={{ background: '#fff', color: '#333', boxShadow: 'none' }}>
        <Toolbar>
          <Container
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Link to='/'>
              <Logo />
            </Link>
            <Stack direction='row' alignItems='center'>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item, index) => (
                  <Button key={index} sx={{ color: '#333' }}>
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </Box>
              <Tooltip title='Account settings'>
                <IconButton
                  onClick={handleClickAvatar}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={isShowAccountTooltip ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={isShowAccountTooltip ? 'true' : undefined}
                >
                  {currentUser && (
                    <Avatar src={currentUser && currentUser.photoURL}>
                      {!currentUser.photoURL && getFirstLetter(currentUser.nickname)}
                    </Avatar>
                  )}
                  {!currentUser && <Avatar />}
                </IconButton>
              </Tooltip>
              <AccountTooltip
                isOpen={isShowAccountTooltip}
                onClose={handleCloseAccountTooltip}
                anchorEl={anchorEl}
                onLogout={handleSignOut}
              />
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
      </Box>
    </>
  );
};

export default Header;
