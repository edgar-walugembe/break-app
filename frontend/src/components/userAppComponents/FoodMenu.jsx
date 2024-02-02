/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { cards } from "../../constants";
import {} from "../../assets";
import Card from "./Card";

const FoodMenu = ({ count, decreaseCount, increaseCount }) => {
  return (
    <div className="surface-ground px-2 py-1 md:px-4 lg:px-6 ">
      <div className="grid">
        <h3>Snacks Available</h3>
      </div>

      <div className="grid cards">
        {cards.map((item) => (
          <Card
            key={item.id}
            {...item}
            count={count}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ))}
      </div>
    </div>
  );
};

FoodMenu.propTypes = {
  count: PropTypes.number,
  decreaseCount: PropTypes.func,
  increaseCount: PropTypes.func,
};

export default FoodMenu;
