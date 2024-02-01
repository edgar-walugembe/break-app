/* eslint-disable no-unused-vars */
import { Menu, Navbar } from "../../../components/dashboardComponents";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home h-full">
      <div className="flex">
        <Menu />
        <div className="w-full ml-[250px]">
          <Navbar />

          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
