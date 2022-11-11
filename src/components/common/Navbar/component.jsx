import React from 'react';
import { Stack } from '@mui/material';
import { NAV_ITEMS } from 'app/constant';
import { selectAuthenticated } from 'features/auth/authSlice';
import useAuth from 'features/auth/hooks/useAuth';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountTooltip from '../Header/AccountTooltip';
import HeaderLoginButton from '../Header/HeaderLoginButton';
import MenuIconButton from '../Header/MenuIconButton';
import VerticalNavbar from '../Header/VerticalNavbar';
import NavbarMenuList from './NavbarMenuList';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectAuthenticated);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth/login');
    } catch (error) {}
  };

  return (
    <Stack direction='row' alignItems='center' sx={{ columnGap: '10px' }}>
      <NavbarMenuList listItems={NAV_ITEMS} />
      {!isAuthenticated && <HeaderLoginButton inverted={false} />}
      {isAuthenticated && <AccountTooltip onSignOut={handleSignOut} />}
      <MenuIconButton onClick={handleDrawerToggle} />
      <VerticalNavbar
        isOpen={mobileOpen}
        onToggleClick={handleDrawerToggle}
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
      />
    </Stack>
  );
};

export default Navbar;
