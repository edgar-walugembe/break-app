/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import styles, { layout } from "../../style";
import { close, logo, menu } from "../../assets";

//icons
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="breakApp_logo" className="w-[130px] h-[36px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          Menu
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          Services
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
        >
          Status
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-0`}
        >
          <div className="flex w-[80px] p-2 gap-2 rounded h-[40px] bg-yellow">
            <FaUser className="w-[24px] h-[24px] text-black" />
            <span className="text-black">User</span>
          </div>
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
              Menu
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              Services
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
            >
              Status
            </li>
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0`}
            >
              <div className="flex w-[80px] h-[40px] p-2 gap-2 rounded bg-yellow text-black">
                <FaUser className="w-[24px] h-[24px]" />
                <span>User</span>
              </div>
            </li>
            ;
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
