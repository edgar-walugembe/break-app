/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import breakfast00 from "../assets/break_logo.png";
import breakfast01 from "../assets/break_logo.30.jpeg";
import breakfast02 from "../assets/break_logo.40.jpg";
import breakfast03 from "../assets/break_logo.50.png";
import breakfast04 from "../assets/break_logo.png";
import odyssey_logo from "../assets/odyssey.png";
import { CiSquareQuestion } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import styles from "../style";

const Menu = () => {
  return (
    <div className={`menu h-full w-[250px] flex flex-col justify-evenly`}>
      <div className="items-center flex justify-center">
        <img src={breakfast01} alt="app_logo" className="h-[100px] w-[250px]" />
      </div>

      <div className="flex flex-col justify-between gap-5">
        <div className={`rounded menuSpan`}>
          <Link to="/" className="flex justify-evenly w-full p-2">
            <IoFastFood />
            <span className="text-black">Orders</span>
          </Link>
        </div>
        <div className={`rounded menuSpan`}>
          <Link to="/" className="flex justify-evenly w-full p-2">
            <IoFastFood />
            <span className="text-black">Users</span>
          </Link>
        </div>
        <div className={`rounded menuSpan`}>
          <Link to="/" className="flex justify-evenly w-full p-2">
            <IoFastFood />
            <span className="text-black">Food Menu</span>
          </Link>
        </div>
        <div className={`rounded menuSpan`}>
          <Link to="/" className="flex justify-evenly w-full p-2">
            <IoFastFood />
            <span className="text-black">Notifications</span>
          </Link>
        </div>
      </div>

      {/* <div className="">
        <img src={odyssey_logo} alt="odyssey_logo" className={`h-[50px]`} />
      </div> */}
    </div>
  );
};

export default Menu;
