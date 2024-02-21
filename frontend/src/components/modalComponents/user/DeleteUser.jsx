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

function DeleteUser() {
  const { inputValue, setInputValue, openDeleteUser, setOpenDeleteUser } =
    useContext(ModalContext);

  const handleCloseDelete = () => {
    setOpenDeleteUser(false);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted value:", inputValue);
    handleCloseDelete();
  };

  return (
    <div>
      <Dialog open={openDeleteUser} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Delete User</span>
          <div
            onClick={handleCloseDelete}
            className="bg-black rounded-full p-2 w-[28px] h-[28px] items-center flex"
          >
            <img src={close} alt="close" className="w-[24px] h-[24px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex gap-4">
            <p>Are you sure you want to delete this user ?</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDelete}
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

export default DeleteUser;
