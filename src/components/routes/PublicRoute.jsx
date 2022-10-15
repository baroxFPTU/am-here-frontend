import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = true;
  const defaultPath = '/';

  return isLoggedIn ? <Navigate to={defaultPath} /> : <Outlet />;
};

export default PublicRoute;
