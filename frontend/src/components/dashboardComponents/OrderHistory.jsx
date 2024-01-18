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
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "dateOfOrder",
      headerName: "Date of Order",
      width: 100,
      editable: true,
    },
    {
      field: "productSelected",
      headerName: "Product",
      width: 100,
      editable: true,
    },
    {
      field: "quantitySelected",
      headerName: "Qty",
      // type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "madeBy",
      headerName: "Owner",
      width: 100,
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
    <div className="flex flex-col h-screen justify-evenly">
      {/* <div className="flex justify-between"></div> */}

      <div className="flex">
        <div className="left flex flex-col">
          <h3 className="text-black text-[14px]">Previous Orders</h3>

          <div className="w-full h-full">
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
                fontSize: "12px",
                border: "3px solid yellow",
                borderRadius: "10px",
                width: "max-content",
                // backgroundColor: "#272822",
                // color: "white",
              }}
            />
          </div>

          <div className="flex justify-end gap-4 mt-2">
            <Link to="/home/product">
              <Button type="button" variant="primary" size="sm">
                Place Your Order
              </Button>
            </Link>

            <Button onClick={notify} type="button" variant="warning" size="sm">
              Notify
            </Button>
          </div>
        </div>
        <div className="right p-5 text-center justify-center items-center">
          <h1 className="text-blue-900 text-[50px] font-bold">
            Did You Make An Order Today ??
          </h1>
        </div>
      </div>

      <Highlights />

      <ToastContainer />
    </div>
  );
};

export default OrderHistory;
