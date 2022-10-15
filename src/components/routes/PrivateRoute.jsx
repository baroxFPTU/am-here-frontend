import { selectIsLoggedIn } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginPath = '/auth/login';
  console.log({ isLoggedIn });

  return isLoggedIn ? <Outlet /> : <Navigate to={loginPath} />;
};

export default PrivateRoute;
