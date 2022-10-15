import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import {
  AppBar,
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
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

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
  {
    label: 'Trò chuyện với bác sĩ',
    href: '/take-care',
  },
  {
    label: 'Làm người lắng nghe',
    href: '/abc',
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
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
              <IconButton>
                <AccountCircleOutlinedIcon fontSize='large' htmlColor='#87CEEB' />
              </IconButton>
              <IconButton>
                <PersonAddOutlinedIcon fontSize='large' htmlColor='#87CEEB' />
              </IconButton>
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
