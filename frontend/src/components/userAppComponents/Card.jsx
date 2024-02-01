/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const Card = ({ title, id, price, img }) => {
  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="card p-2 flex flex-col items-center justify-center rounded bg-white">
        <div className="card.img">
          <img src={img} alt={title} className="w-full h-[200px]" />
        </div>

        <h3 className="text-center font-semibold text-[16px]">{title}</h3>

        <span>Shs.{price}</span>

        <FiPlusCircle className="text-xl text-yellow" />
      </div>
    </div>
  );
};

export default Card;
