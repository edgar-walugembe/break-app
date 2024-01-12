/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import breakfast00 from "../assets/break_logo.png";
import breakfast01 from "../assets/break_logo.30.jpeg";
import breakfast02 from "../assets/break_logo.40.jpg";
import breakfast03 from "../assets/break_logo.50.png";
import breakfast04 from "../assets/break_logo.png";
import odyssey_logo from "../assets/odyssey.png";

const Menu = () => {
  return (
    <div className={`h-full flex flex-col justify-between gap-16`}>
      <div className="h-20 items-center flex justify-center">
        <img src={breakfast01} alt="app_logo" className="h-[100px] w-[250px]" />
      </div>
      <div className="h-80 flex flex-col justify-between">
        <div className="items-center flex justify-center ">
          <Button variant="info" size="md" className="font-semibold">
            ORDERS
          </Button>
        </div>
        <div className="items-center flex justify-center">
          <Button variant="info" size="md">
            USERS
          </Button>
        </div>
        <div className="items-center flex justify-center">
          <Button variant="info" size="md">
            PRODUCTS
          </Button>
        </div>
        <div className="items-center flex justify-center">
          <Button variant="info" size="md">
            PRODUCTS
          </Button>
        </div>
      </div>
      <div className="h-20">
        <img src={odyssey_logo} alt="odyssey_logo" />
      </div>
    </div>
  );
};

export default Menu;
