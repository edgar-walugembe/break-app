/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { Home, Login, User, Product, Order, Password } from "./pages";

const App = () => {
  const Layout = () => {
    return (
      <div className="main w-full overflow-hidden">
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
        // {
        //   path: "/home",
        //   element: <Home />,
        // },
        {
          path: "/password",
          element: <Password />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
