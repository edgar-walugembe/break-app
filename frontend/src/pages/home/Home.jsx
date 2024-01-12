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
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="flex h-full">
        <Menu />
        <div className="outlet w-full">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
