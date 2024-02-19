/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Menu, Navbar } from "../../../components/dashboardComponents";
import { ModalContext } from "../../../contexts/ModalContext";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  //product State
  const [openCreatePdt, setOpenCreatePdt] = useState(false);
  const [openDeletePdt, setOpenDeletePdt] = useState(false);
  const [openEditPdt, setOpenEditPdt] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    status: "",
    img: "",
  });

  //user State
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const userRef = useRef(null);
  const [editUser, setEditUser] = useState(false);

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
            openCreateUser,
            openDeleteUser,
            openEditUser,
            setOpenCreateUser,
            setOpenDeleteUser,
            setOpenEditUser,
            userRef,
            editUser,
            setEditUser,
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
