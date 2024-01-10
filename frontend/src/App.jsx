/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Order from "./pages/order/Order";
import Password from "./pages/password/Password";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
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

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    // Perform your login logic here
    // After successful login, navigate to the home page
    navigate("/home");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login onLogin={handleLogin} />,
      children: [
        {
          path: "/password",
          element: <Password />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "/users",
          element: <User />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
