/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ForgotPassword;
