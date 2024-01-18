/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import styles, { layout } from "../../style";
import { close, menu } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="breakApp_logo" className="" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1"></ul>
    </nav>
  );
};

export default Navbar;
