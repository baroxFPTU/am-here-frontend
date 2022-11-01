import { selectAuthenticated, selectIsAuthenticating } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ redirectPath }) => {
  const isAuthenticated = useSelector(selectAuthenticated);
  const isAuthenticating = useSelector(selectIsAuthenticating);

  if (isAuthenticating) return null;
  return !isAuthenticated ? <Outlet /> : <Navigate to={redirectPath || '/'} />;
};

export default AuthRoute;
