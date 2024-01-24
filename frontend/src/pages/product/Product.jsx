/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.css";

//primereact imports
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

import { ProductService } from "../../service/ProductService";

//toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast.success("let's chat");
};

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
        alt={product.image}
        className="w-[3rem] h-[3rem] shadow rounded"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getSeverity(product)}
      ></Tag>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-xl text-gray-900 font-bold">Products</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div className="product surface-ground px-2 py-1 md:px-4 lg:px-6">
      <div className="grid">
        <div
          className={`rounded button-yellow mb-1 self-end text-[14px] col-12`}
        >
          <Link
            to="/Admin/Dashboard/users/"
            className="flex justify-evenly w-full py-1"
          >
            <span className="text-black">Add New Product</span>
          </Link>
        </div>

        <div className="card p-2 col-12">
          <DataTable
            value={products}
            showGridlines
            stripedRows
            header={header}
            footer={footer}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="name" header="Name" />
            <Column header="Image" body={imageBodyTemplate} />
            <Column field="price" header="Price" body={priceBodyTemplate} />
            <Column field="category" header="Category" />
            {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} /> */}
            <Column header="Status" body={statusBodyTemplate} />
          </DataTable>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Product;
