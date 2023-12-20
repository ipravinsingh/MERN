import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = true;    //false
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
