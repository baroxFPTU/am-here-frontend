import React, { memo } from 'react';
import Button from '../Button';

const HeaderLogoutButton = ({ inverted, ...props }) => {
  return <Button {...props}>Đăng xuất</Button>;
};

export default memo(HeaderLogoutButton);
