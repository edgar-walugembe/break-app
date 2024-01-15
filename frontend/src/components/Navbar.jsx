/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-between p-2 ">
      <div>
        <h3>Hello, Username</h3>
        <p>{formattedDate}</p>
      </div>
      <div className="flex gap-5 items-center">
        <Link to="/home/user_account">
          <FaUser className="w-[32px] h-[32px] text-black" />
        </Link>

        <Link to="/home/user_settings">
          <IoSettings className="w-[32px] h-[32px] text-black" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
