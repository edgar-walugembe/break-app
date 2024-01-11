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
    <section className="main h-full">
      <div className={`flex `}>
        <div className={`menuContainer`}>
          <Menu />
        </div>
        <div className={`contentContainer`}>
          <Outlet />
        </div>
      </div>
      <div className={``}>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
