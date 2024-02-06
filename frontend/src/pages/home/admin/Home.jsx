/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Menu, Navbar } from "../../../components/dashboardComponents";
import { ModalContext } from "../../../contexts/ModalContext";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [openCreatePdt, setOpenCreatePdt] = useState(false);
  const [openDeletePdt, setOpenDeletePdt] = useState(false);
  const [openEditPdt, setOpenEditPdt] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="home h-full">
      <div className="flex">
        <ModalContext.Provider
          value={{
            inputValue,
            setInputValue,
            openCreatePdt,
            openDeletePdt,
            openEditPdt,
            setOpenCreatePdt,
            setOpenDeletePdt,
            setOpenEditPdt,
          }}
        >
          <Menu />
          <div className="w-full ml-[250px]">
            <Navbar />

            <div className="outlet">
              <Outlet />
            </div>
          </div>
        </ModalContext.Provider>
      </div>
    </section>
  );
};

export default Home;
