/* eslint-disable no-unused-vars */
import {
  AddProduct,
  AddUser,
  EditProduct,
  EditUser,
  ForgotPassword,
  Menu,
  Navbar,
  Orders,
  OrderHistory,
  SetPassword,
  UserList,
} from "../../../components/dashboardComponents";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="flex h-full relative">
        <Menu />
        <div className="w-full">
          <Navbar />

          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
