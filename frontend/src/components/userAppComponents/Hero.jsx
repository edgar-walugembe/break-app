/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../../style";

//icons
import { GiCash } from "react-icons/gi";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart} `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-yellow">
          <GiCash className="text-white w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 center`}>
            A daily
            <span className="text-white"> Budget </span>of UgSh
            <span className="text-white"> 2000</span>
          </p>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Hero;
