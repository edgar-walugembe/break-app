/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const Navbar = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center">
        <h2 className="text-blue-900 text-[18px]">Hello, Username</h2>
        <p className="font-semibold text-blue-500 text-[12px]">
          {formattedDate}
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/home/user_account">
          <FaUser className="w-[24px] h-[24px] text-blue-500" />
        </Link>

        <Notification className="w-[24px] h-[24px]" />

        <Link to="/home/user_settings">
          <IoSettings className="w-[24px] h-[24px] text-blue-500" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
