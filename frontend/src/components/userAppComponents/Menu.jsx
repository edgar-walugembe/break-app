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

import { logo, odyssey_logo } from "../../assets";

//icon imports
import { IoFastFood, IoCartOutline } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const Menu = () => {
  return (
    <div className={`menu h-full w-[250px] flex flex-col justify-between`}>
      <div className="items-center flex justify-center mt-4">
        <Link to="/User/home/">
          <img src={logo} alt="app_logo" className="h-[35px]" />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-5 ">
        <div className={`rounded menuSpan`} id="active">
          <Link
            to="/User/home/order/"
            className="flex justify-evenly w-full p-2"
          >
            <IoCartOutline className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Orders</span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/User/home/product/"
            className="flex justify-evenly w-full p-2"
          >
            <IoFastFood className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Food Menu</span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/User/home/finances/"
            className="flex justify-evenly w-full p-2"
          >
            <GiCash className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Finances</span>
          </Link>
        </div>
      </div>

      <div className="mb-4 sm:mb-2">
        <Link to="https://www.odysseytech.co/">
          <img src={odyssey_logo} alt="odyssey_logo" className={`h-[50px]`} />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
