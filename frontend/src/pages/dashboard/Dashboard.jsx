/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import {
  Home,
  Login,
  User,
  Product,
  Order,
  Password,
  Finances,
} from "../index";
import {
  AddProduct,
  AddUser,
  Debt,
  EditProduct,
  EditUser,
  ForgotPassword,
  Menu,
  Navbar,
  Notification,
  Orders,
  OrderHistory,
  SetPassword,
  UserList,
  UserSettings,
  UserAccount,
} from "../../components/dashboardComponents";

const Dashboard = () => {
  <Outlet />;
};

export default Dashboard;
