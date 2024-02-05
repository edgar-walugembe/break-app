/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Menu, Navbar } from "../../../components/dashboardComponents";
import { ModalContext } from "../../../contexts/ModalContext";
import { Outlet } from "react-router-dom";
import "./home.css";

const Home = () => {
  //createProduct Modal
  const [createProduct, setCreateProduct] = useState(false);

  //open & close createProduct Dialog.
  const openCreateProductDialog = (product) => {
    setCreateProduct(product);
    setCreateProduct(true);
  };

  const closeCreateProductDialog = () => {
    setCreateProduct(false);
    setCreateProduct(null);
  };

  return (
    <section className="home h-full">
      <div className="flex">
        <ModalContext.Provider
          value={{
            createProduct,
            setCreateProduct,
            closeCreateProductDialog,
            openCreateProductDialog,
          }}
        >
          <Menu />
          <div className="w-full ml-[250px]">
            <Navbar />

            <div className="outlet">
              <Outlet />
            </div>
          </div>
        </ModalContext.Provider>
      </div>
    </section>
  );
};

export default Home;
