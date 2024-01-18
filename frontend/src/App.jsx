/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import styles, { layout } from "./style";
import {
  CTA,
  Footer,
  Hero,
  Menu,
  Navbar,
  Services,
} from "./components/userAppComponents";

const App = () => {
  return (
    <div className="font-poppins bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Menu />
          <Services />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
