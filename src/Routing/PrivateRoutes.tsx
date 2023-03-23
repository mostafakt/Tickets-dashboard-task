/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isLoggedIn } from "services/authManager";

const PrivateRoute = () => {
  const auth = isLoggedIn();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
