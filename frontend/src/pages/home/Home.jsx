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
} from "../../components/dashboardComponents";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="flex h-full">
        <Menu />
        <div className="outlet w-full h-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
