/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import Highlights from "./Highlights";
import { Link } from "react-router-dom";

//toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast.success("let's chat");
};

const OrderHistory = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <ToastContainer />
    </div>
  );
};

export default OrderHistory;
