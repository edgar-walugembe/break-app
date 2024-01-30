// /* eslint-disable no-unused-vars */
// import React from "react";

// //styles
// import styles, { layout } from "../../style";

// //icons
// import { LuPlusCircle } from "react-icons/lu";
// import { MdOutlineExposurePlus1, MdOutlineExposurePlus2 } from "react-icons/md";

// const Menu = () => {
//   return (
//     <section id="features" className={layout.section}>
//       <div className={layout.sectionInfo}>
//         <h2 className="text-white">Available Snacks</h2>
//       </div>
//       ;
//     </section>
//   );
// };

// export default Menu;

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//images imports

import { favicon, favicon00, logo, odyssey_logo } from "../../assets";

//icon imports
import { IoFastFood, IoCartOutline } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const Menu = () => {
  return (
    <div className={`menu h-full w-[250px] flex flex-col justify-between`}>
      <div className="items-center flex justify-center mt-2">
        {/* <Link to="/User/home/">
          <img src={logo} alt="app_logo" className="h-[35px]" />
          <img src={favicon} alt="app_logo" className="h-[35px]" />
        </Link> */}

        <Link to="/User/home/">
          <img
            src={logo}
            alt="app_logo"
            className="h-[35px] hidden sm:inline"
          />
        </Link>

        <Link to="/User/home/">
          <img
            src={favicon}
            alt="app_logo"
            className="h-[50px] inline sm:hidden"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-5 ">
        <div className={`rounded menuSpan`} id="active">
          <Link
            to="/User/home/orders/:id/"
            className="flex flex-col justify-center items-center w-full p-2"
          >
            <IoCartOutline className="w-[22px] h-[22px] text-black" />
            <span className="text-black text-[14px] hidden sm:inline-block">
              Orders
            </span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/User/home/food_menu/"
            className="flex flex-col justify-center items-center w-full p-2"
          >
            <IoFastFood className="w-[22px] h-[22px] text-black" />
            <span className="text-black text-[14px] hidden sm:inline-block">
              Food Menu
            </span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/User/home/finances/:id/"
            className="flex flex-col justify-center items-center w-full p-2"
          >
            <GiCash className="w-[22px] h-[22px] text-black" />
            <span className="text-black text-[14px] hidden sm:inline-block">
              Finances
            </span>
          </Link>
        </div>
      </div>

      <div className="mb-4 sm:mb-2 items-center flex justify-center">
        <Link to="https://www.odysseytech.co/">
          <img
            src={odyssey_logo}
            alt="odyssey_logo"
            className={`h-[50px] hidden sm:inline`}
          />
        </Link>

        <Link to="https://www.odysseytech.co/">
          <img
            src={favicon00}
            alt="odyssey_logo"
            className={`h-[50px] inline sm:hidden`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
