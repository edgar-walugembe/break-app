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
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "dateOfOrder",
      headerName: "Date of Order",
      width: 160,
      editable: true,
    },
    {
      field: "productSelected",
      headerName: "Product",
      width: 160,
      editable: true,
    },
    {
      field: "quantitySelected",
      headerName: "Qty",
      // type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "madeBy",
      headerName: "Owner",
      width: 160,
      editable: true,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 150,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const rows = [
    {
      id: 1,
      productSelected: "Snow",
      dateOfOrder: "Jon",
      quantitySelected: 14,
    },
    {
      id: 2,
      productSelected: "Lannister",
      dateOfOrder: "Cersei",
      quantitySelected: 31,
    },
    {
      id: 3,
      productSelected: "Lannister",
      dateOfOrder: "Jaime",
      quantitySelected: 31,
    },
    {
      id: 4,
      productSelected: "Stark",
      dateOfOrder: "Arya",
      quantitySelected: 11,
    },
    {
      id: 5,
      productSelected: "Targaryen",
      dateOfOrder: "Daenerys",
      quantitySelected: null,
    },
    {
      id: 6,
      productSelected: "Melisandre",
      dateOfOrder: null,
      quantitySelected: 150,
    },
    {
      id: 7,
      productSelected: "Clifford",
      dateOfOrder: "Ferrara",
      quantitySelected: 44,
    },
    {
      id: 8,
      productSelected: "Frances",
      dateOfOrder: "Rossini",
      quantitySelected: 36,
    },
    {
      id: 9,
      productSelected: "Roxie",
      dateOfOrder: "Harvey",
      quantitySelected: 65,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h3 className="text-black">Previous Orders</h3>
      </div>

      <div className="flex">
        <div className="left flex flex-col gap-4">
          <div className="w-full">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 4,
                  },
                },
              }}
              pageSizeOptions={[4]}
              checkboxSelection
              disableRowSelectionOnClick
              style={{
                fontSize: "20px",
                border: "3px solid yellow",
                borderRadius: "20px",
                width: "max-content",
                // backgroundColor: "#272822",
                // color: "white",
              }}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Link to="/home/product">
              <Button type="button" variant="primary" size="lg">
                Place Your Order
              </Button>
            </Link>

            <Button onClick={notify} type="button" variant="warning" size="lg">
              Notify
            </Button>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <Highlights />

      <ToastContainer />
    </div>
  );
};

export default OrderHistory;
