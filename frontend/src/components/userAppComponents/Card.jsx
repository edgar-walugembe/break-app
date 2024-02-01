/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ icon, title, id, price, img }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card.img" />

      <div className="card.title">
        <h1>{title}</h1>
      </div>

      <div className="card.price">
        <span>{price}</span>
        <span>{icon}</span>
      </div>
    </div>
  );
};

export default Card;
