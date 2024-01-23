/* eslint-disable no-unused-vars */
import React from "react";
import {
  CTA,
  Footer,
  Hero,
  Menu,
  Navbar,
  Services,
} from "../../../components/userAppComponents/index";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home00 = () => {
  return (
    <section className="home">
      <div className="flex h-full">
        <Menu />
        <div className="h-full w-full">
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
