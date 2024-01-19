/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../style";

//images
import { logo_spin } from "../../assets";

//icons
import { GiCash } from "react-icons/gi";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart} `}
      >
        <div className="flex flex-row items-center justify-center py-[6px] px-4 rounded-[10px] mb-2 gap-2 bg-yellow">
          <GiCash className="text-white w-[32px] h-[32px] animate-bounce" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">A daily </span> Budget
            <span className="text-white"> of UgSh</span> 2000
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Order Your
            <br className="sm:block hidden" /> {""}
            <span className="text-yellow">BreakFast Snack</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          {" "}
          At Your Convenience.
        </h1>
        {/* <div className=""></div> */}
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}
      >
        <img
          src={logo_spin}
          alt="breakfast_logo"
          className="w-[400px] h-[400px] rounded-full animate-spin animate-spin-slow"
        />
      </div>
    </section>
  );
};

export default Hero;
