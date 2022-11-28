import React from 'react';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { selectUser } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

const AccountTooltipMenu = ({ anchorEl, isOpen, onClick, onClose, onLogout }) => {
  const currentUser = useSelector(selectUser);

  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component={Link} to={`/profiles/${currentUser.id}`}>
        Tài khoản của tôi
      </MenuItem>
      <Divider />
      <MenuItem component={Link} to={`/settings`}>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Cài đặt
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Đăng xuất
      </MenuItem>
    </Menu>
  );
};

export default AccountTooltipMenu;
