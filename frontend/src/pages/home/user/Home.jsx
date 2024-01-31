/* eslint-disable no-unused-vars */
import React from "react";
import { Menu, Navbar } from "../../../components/userAppComponents";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home00 = () => {
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

export default Home00;
