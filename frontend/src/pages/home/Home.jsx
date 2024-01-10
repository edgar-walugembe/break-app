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
import styles from "../../style";

const Home = () => {
  return (
    <div className="w-full">
      <div className={`flex ${styles.boxWidth}`}>
        <div
          className={`menuContainer ${styles.paddingX} ${styles.flexCenter} lg:max-w-full`}
        >
          <Menu />
        </div>
        <div
          className={`contentContainer ${styles.paddingX} ${styles.flexCenter}`}
        >
          <Outlet />
        </div>
      </div>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
