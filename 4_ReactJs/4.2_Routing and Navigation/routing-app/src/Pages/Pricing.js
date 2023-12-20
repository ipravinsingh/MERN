import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

function Pricing() {
  // const location = useLocation();
  return (
    <div>
      Show Pricing
      <Outlet />
    </div>
  );
}

export default Pricing;
