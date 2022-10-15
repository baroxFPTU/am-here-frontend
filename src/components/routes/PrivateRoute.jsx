import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = true;
  const loginPath = '/login';

  return isLoggedIn ? <Outlet /> : <Navigate to={loginPath} />;
};

export default PrivateRoute;
