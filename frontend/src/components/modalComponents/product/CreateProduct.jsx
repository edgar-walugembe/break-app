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

function CreateProduct() {
  const { inputValue, setInputValue, openCreatePdt, setOpenCreatePdt } =
    useContext(ModalContext);

  const handleClickOpen = () => {
    setOpenCreatePdt(true);
  };

  const handleClose = () => {
    setOpenCreatePdt(false);
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
      <Dialog open={openCreatePdt} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Add New Product</span>
          <div
            onClick={handleClose}
            className="bg-black rounded-full p-2 w-[28px] h-[28px] items-center flex"
          >
            <img src={close} alt="close" className="w-[24px] h-[24px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex gap-4">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Product Name"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Unit Price"
              type="text"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
              // value={inputValue}
              onChange={handleInputChange}
            />
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateProduct;
