/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import styles, { layout } from "./style";
// import {
//   CTA,
//   Footer,
//   Hero,
//   Menu,
//   Navbar,
//   Services,
// } from "./components/userAppComponents";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Login,
  User,
  Product,
  Order,
  Password,
  Finances,
  Dashboard,
} from "./pages";
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
} from "./components/dashboardComponents";

const App = () => {
  // <div className="font-poppins bg-black  w-full overflow-hidden">
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>

  //   <div className={` ${styles.flexStart} bg-black`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Hero />
  //     </div>
  //   </div>

  //   <div className={`${styles.paddingX} ${styles.flexStart} bg-black`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Menu />
  //       <Services />
  //       <CTA />
  //       <Footer />
  //     </div>
  //   </div>
  // </div>
  // <Dashboard />;

  const Layout = () => {
    return (
      <div className="w-full h-full font-poppins">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/Admin/Dashboard",
          element: <Home />,
          children: [
            {
              path: "/Admin/Dashboard/order",
              element: <Order />,
            },
            {
              path: "/Admin/Dashboard/user",
              element: <User />,
            },
            {
              path: "/Admin/Dashboard/product",
              element: <Product />,
            },
            {
              path: "/Admin/Dashboard/finances",
              element: <Finances />,
            },
            {
              path: "/Admin/Dashboard/notifications",
              element: <Notification />,
            },
            {
              path: "/Admin/Dashboard/user_settings",
              element: <UserSettings />,
            },
            {
              path: "/Admin/Dashboard/user_account",
              element: <UserAccount />,
            },
            {
              path: "/Admin/Dashboard",
              element: <OrderHistory />,
            },
          ],
        },
        {
          path: "/password",
          element: <Password />,
          children: [
            {
              path: "/password/set_password",
              element: <SetPassword />,
            },
            {
              path: "/password/reset_password",
              element: <ForgotPassword />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
