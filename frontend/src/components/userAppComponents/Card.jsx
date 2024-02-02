/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const Card = ({ title, id, price, img }) => {
  return (
    <div className="col-12 md:col-6 lg:col-4 relative">
      <div className="card p-2 flex flex-col rounded bg-white">
        <div className="card.img">
          <img src={img} alt={title} className="w-full h-[200px] rounded-md" />
        </div>

        <h3 className="text-center font-semibold text-[16px]">{title}</h3>

        <span className="text-center text-amber font-medium">Shs.{price}</span>

        <div
          className="icon.box absolute mt-0 mr-0 flex items-center justify-center bg-amber rounded"
          style={{ width: "2.5rem", height: "2.5rem" }}
        >
          <FiPlusCircle className="text-xl text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default Card;
