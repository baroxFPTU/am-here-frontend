import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const HeaderLoginButton = ({ inverted }) => {
  const displayValueXs = inverted ? 'flex' : 'none';
  const displayValueSm = inverted ? 'none' : 'flex';

  return (
    <Button
      variant='contained'
      sx={{ ml: !inverted && 2, display: { xs: displayValueXs, sm: displayValueSm } }}
      component={Link}
      to='/auth/login'
    >
      Đăng nhập
    </Button>
  );
};

export default memo(HeaderLoginButton);
