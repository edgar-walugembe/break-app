/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FiPlusCircle } from "react-icons/fi";

const Card = ({ title, price, img, increaseCount }) => {
  //increase count Function
  const handleIncreaseCount = () => {
    debugger;
    increaseCount();
  };

  return (
    <div className="col-12 md:col-6 lg:col-4 relative">
      <div className="card flex flex-col rounded bg-white">
        <div className="card.img">
          <img
            src={img}
            alt={title}
            className="w-full h-[200px] rounded-t-md"
          />
        </div>

        <h3 className="text-center font-medium text-[16px]">{title}</h3>

        <span className="text-center text-cyan font-medium mx-14 mb-1">
          Shs.{price}
        </span>

        <div
          className="icon.box absolute mt-0 mr-0 flex items-center justify-center bg-amber rounded"
          style={{ width: "2.5rem", height: "2.5rem" }}
          onClick={handleIncreaseCount}
        >
          <FiPlusCircle className="text-xl text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  // price: PropTypes.number,
  img: PropTypes.string,
  count: PropTypes.number,
  decreaseCount: PropTypes.func,
  increaseCount: PropTypes.func,
};

export default Card;
