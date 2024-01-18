/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import styles, { layout } from "../../style";
import { close, logo, menu } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="breakApp_logo" className="w-[130px] h-[36px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          me
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          you
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          them
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-0`}
        >
          us
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[26px] h-[24px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute my-4 mx-2 top-20 right-0 rounded-xl min-w-[140px] sidebar`}
        >
          <ul className="list-nome flex flex-col justify-end items-center flex-1">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              me
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              you
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              them
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0`}
            >
              us
            </li>
            ;
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
