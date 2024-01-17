/* eslint-disable no-unused-vars */
import React from "react";

const Highlights = () => {
  return (
    <div className="highlight flex flex-col px-2">
      <div className="px-5 pt-2">
        <h3 className="text-yellow-300 text-[14px]">Highlights</h3>
      </div>

      <div className=" flex justify-center gap-4 items-center h-[80%] w-[100%] pb-2">
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
