/* eslint-disable no-unused-vars */
import React from "react";

const Highlights = () => {
  return (
    <div className="highlight flex flex-col py-4 md:py-2">
      <h3 className="text-yellow-300">Highlights</h3>
      <div className=" flex justify-around items-center h-[80%] w-[100%]">
        <div className="item h-[90%] w-[20%] rounded-xl">Debt Status</div>
        <div className="item h-[90%] w-[20%] rounded-xl ">Balance Status</div>
        <div className="item h-[90%] w-[20%] rounded-xl">Order Status</div>
        <div className="item h-[90%] w-[20%] rounded-xl">
          Notification Status
        </div>
      </div>
    </div>
  );
};

export default Highlights;
