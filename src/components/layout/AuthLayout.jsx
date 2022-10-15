import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return <div>{children || <Outlet />}</div>;
};

export default AuthLayout;
