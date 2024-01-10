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
  return (
    <div className="w-full overflow-hidden">
      <Login />
    </div>
  );
};

export default App;
