/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//primeReact
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../service/ProductService";

//toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast.success("let's chat");
};

const OrderHistory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="surface-ground px-2 py-1 md:px-4 lg:px-6">
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
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default OrderHistory;
