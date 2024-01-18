/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Dashboard } from "./pages";
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
    <div className="font-poppins">
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Hero />
      </div>

      <div className="">
        <Menu />
        <Services />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
