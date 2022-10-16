import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AccountTooltip = ({ anchorEl, isOpen, onClick, onClose, onLogout }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={isOpen}
      onClose={onClose}
      onClick={onClose}
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
      <MenuItem>Tài khoản của tôi</MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Cài đặt
      </MenuItem>
      {isLoggedIn && (
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      )}
      {!isLoggedIn && (
        <MenuItem onClick={() => navigate('/auth/login')}>
          <ListItemIcon>
            <Login fontSize='small' />
          </ListItemIcon>
          Đăng nhập
        </MenuItem>
      )}
    </Menu>
  );
};

export default AccountTooltip;
