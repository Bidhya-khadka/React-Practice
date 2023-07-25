import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// secured route ko child dekhauna outlet built-in component use gary it shows home and counter component
const SecuredRoute = () => {
  const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  // session storage will store value in string so it need to be parsed into boolean to match the following condititon
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecuredRoute;
