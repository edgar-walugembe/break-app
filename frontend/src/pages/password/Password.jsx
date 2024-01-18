import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/dashboardComponents";
import "./password.css";

const Password = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Password;
