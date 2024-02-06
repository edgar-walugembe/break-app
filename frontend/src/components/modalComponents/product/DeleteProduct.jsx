/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import Button from "@mui/material/Button";

import { ModalContext } from "../../../contexts/ModalContext";
import { close } from "../../../assets";

function DeleteProduct() {
  const { inputValue, setInputValue, openDeletePdt, setOpenDeletePdt } =
    useContext(ModalContext);

  const handleClickOpen = () => {
    setOpenDeletePdt(true);
  };

  const handleClose = () => {
    setOpenDeletePdt(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted value:", inputValue);
    handleClose();
  };

  return (
    <div>
      <Dialog open={openDeletePdt} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Delete Product</span>
          <div
            onClick={handleClose}
            className="bg-yellow rounded-full p-2 w-[28px] h-[28px] items-center flex"
          >
            <img src={close} alt="close" className="w-[24px] h-[24px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex gap-4">
            <p>Are you sure you want to delete this product ?</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            style={{ background: "cyan", color: "black" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            style={{ background: "yellow", color: "black" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteProduct;
