/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import styles, { layout } from "../../style";
import { close, logo, menu } from "../../assets";

//icons
import { FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { StyleClass } from "primereact/styleclass";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    //   <img src={logo} alt="breakApp_logo" className="w-[130px] h-[36px]" />

    //   <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Menu
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Services
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Status
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-0`}
    //     >
    //       <div className="flex w-[90px] p-2 gap-3 rounded h-[40px] bg-yellow">
    //         <FaUser className="w-[24px] h-[24px] text-black" />
    //         <span className="text-black">User</span>
    //       </div>
    //     </li>
    //   </ul>

    //   <div className="sm:hidden flex flex-1 justify-end items-center">
    //     <img
    //       src={toggle ? close : menu}
    //       alt="menu"
    //       className="w-[26px] h-[24px] object-contain"
    //       onClick={() => setToggle((prev) => !prev)}
    //     />

    //     <div
    //       className={`${
    //         toggle ? "flex" : "hidden"
    //       } p-6 bg-black-gradient absolute my-4 mx-2 top-20 right-0 rounded-xl min-w-[140px] sidebar`}
    //     >
    //       <ul className="list-nome flex flex-col justify-end items-center flex-1">
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Menu
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Services
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Status
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0`}
    //         >
    //           <div className="flex w-[90px] h-[40px] p-2 gap-2 rounded bg-yellow text-black">
    //             <FaUser className="w-[24px] h-[24px]" />
    //             <span>User</span>
    //           </div>
    //         </li>
    //         ;
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <div className="surface-ground px-4 py-5 md:px-6 lg:px-8 ">
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-gray-100 font-medium mb-3">
                  Orders
                </span>
                <div className="text-black font-medium text-xl">152</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            <span className="text-secondary font-medium">24 new </span>
            <span className="text-gray-500">since last visit</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-gray-500 font-medium mb-3">
                  Revenue
                </span>
                <div className="text-black font-medium text-xl">$2.100</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
            <span className="text-secondary font-medium">%52+ </span>
            <span className="text-black">since last week</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-gray-500 font-medium mb-3">
                  Customers
                </span>
                <div className="text-black font-medium text-xl">28441</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span className="text-secondary font-medium">520 </span>
            <span className="text-black">newly registered</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-gray-500 font-medium mb-3">
                  Comments
                </span>
                <div className="text-black font-medium text-xl">152 Unread</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-comment text-purple-500 text-xl"></i>
              </div>
            </div>
            <span className="text-yellow font-medium">85 </span>
            <span className="text-black">responded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
