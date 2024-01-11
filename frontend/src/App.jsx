/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { Home, Login, User, Product, Order, Password } from "./pages";
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
} from "./components";

const App = () => {
  const Layout = () => {
    return (
      <div className="w-full h-full">
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
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "/home/order",
              element: <Order />,
            },
            {
              path: "/home/user",
              element: <User />,
            },
            {
              path: "/home/product",
              element: <Product />,
            },
            {
              path: "/home",
              element: <OrderHistory />,
            },
          ],
        },
        {
          path: "/password",
          element: <Password />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
