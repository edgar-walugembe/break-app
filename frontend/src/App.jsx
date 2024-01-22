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

import { Dashboard } from "./pages";

const App = () => {
  return (
    // <div className="font-poppins bg-black  w-full overflow-hidden">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={` ${styles.flexStart} bg-black`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>

    //   <div className={`${styles.paddingX} ${styles.flexStart} bg-black`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Menu />
    //       <Services />
    //       <CTA />
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
    <Dashboard />
  );
};

export default App;
