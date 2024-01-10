/* eslint-disable no-unused-vars */
import {
  AddProduct,
  AddUser,
  Card,
  EditProduct,
  EditUser,
  Footer,
  ForgotPassword,
  Menu,
  Navbar,
  Orders,
  OrderHistory,
  SetPassword,
  UserList,
} from "../../components";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
