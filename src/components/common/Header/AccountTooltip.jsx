import { Avatar, IconButton, Tooltip } from '@mui/material';
import { selectUser } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFirstLetter } from 'utils/commonUtils';
import AccountTooltipMenu from './AccountTooltipMenu';

const AccountTooltip = ({ onSignOut }) => {
  const currentUser = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isShowAccountTooltip = Boolean(anchorEl);

  const handleClickAvatar = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseAccountTooltip = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
      <AccountTooltipMenu
        isOpen={isShowAccountTooltip}
        onClose={handleCloseAccountTooltip}
        anchorEl={anchorEl}
        onLogout={onSignOut}
      />
    </>
  );
};

export default AccountTooltip;
