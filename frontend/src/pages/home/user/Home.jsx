/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Navbar } from "../../../components/userAppComponents";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home00 = () => {
  //count State
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <section className="home h-full">
      <div className="flex">
        <Menu
          count={count}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
        <div className="w-full ml-[250px]">
          <Navbar />

          <div className="outlet">
            <Outlet
              count={count}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Home00.propTypes = {
  count: PropTypes.number,
  decreaseCount: PropTypes.func,
  increaseCount: PropTypes.func,
};

export default Home00;
