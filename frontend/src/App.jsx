/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Login,
  User,
  Product,
  Order,
  Password,
  Finances,
  Home00,
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
  ProductList,
  SetPassword,
  UserList,
  UserSettings,
  UserAccount,
} from "./components/dashboardComponents";
import {
  FoodMenu,
  UserApp,
  UserFinances,
  UserHistory,
} from "./components/userAppComponents";

const App = () => {
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
          path: "/password",
          element: <Password />,
          children: [
            {
              path: "/password/set_password/:id",
              element: <SetPassword />,
            },
            {
              path: "/password/reset_password/:id",
              element: <ForgotPassword />,
            },
          ],
        },
        {
          path: "/Admin/Dashboard",
          element: <Home />,
          children: [
            {
              path: "/Admin/Dashboard/orders",
              element: <Order />,
              children: [
                {
                  path: "/Admin/Dashboard/orders/all",
                  element: <OrderHistory />,
                },
              ],
            },
            {
              path: "/Admin/Dashboard/users",
              element: <User />,
              children: [
                {
                  path: "/Admin/Dashboard/users/all",
                  element: <UserList />,
                },
              ],
            },
            {
              path: "/Admin/Dashboard/products",
              element: <Product />,
              children: [
                {
                  path: "/Admin/Dashboard/products/all",
                  element: <ProductList />,
                },
              ],
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
            {
              path: "/Admin/Dashboard/password",
              element: <Password />,
              children: [
                {
                  path: "/Admin/Dashboard/password/set_password/:id",
                  element: <SetPassword />,
                },
                {
                  path: "/Admin/Dashboard/password/reset_password/:id",
                  element: <ForgotPassword />,
                },
              ],
            },
          ],
        },
        {
          path: "/User/home",
          element: <Home00 />,
          children: [
            {
              path: "/User/home",
              element: <UserHistory />,
            },
            {
              path: "/User/home/food_menu",
              element: <FoodMenu />,
            },
            {
              path: "/User/home/orders/",
              element: <Order />,
              children: [
                {
                  path: "/User/home/orders/:id",
                  element: <UserHistory />,
                },
              ],
            },
            {
              path: "/User/home/finances/:id",
              element: <UserFinances />,
            },
            {
              path: "/User/home/user_settings/:id",
              element: <UserSettings />,
            },
            {
              path: "/User/home/user_account/:id",
              element: <UserAccount />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
