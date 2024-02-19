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

function EditUser() {
  const { inputValue, setInputValue, openEditUser, setOpenEditUser } =
    useContext(ModalContext);

  const handleClickEdit = () => {
    setOpenEditUser(true);
  };

  const handleCloseEdit = () => {
    setOpenEditUser(false);
  };

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted value:", inputValue);
    handleCloseEdit();
  };

  return (
    <div>
      <Dialog open={openEditUser} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Edit User</span>
          <div
            onClick={handleCloseEdit}
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
              label="Username"
              type="text"
              fullWidth
              value={inputValue.name}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="text"
              fullWidth
              value={inputValue.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-4">
            <TextField
              autoFocus
              margin="dense"
              id="company"
              label="Company"
              type="text"
              fullWidth
              value={inputValue.company}
              onChange={handleInputChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="type"
              label="User Type"
              type="text"
              fullWidth
              value={inputValue.type}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-4">
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="Status"
              type="text"
              fullWidth
              value={inputValue.status}
              onChange={handleInputChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
              onChange={handleInputChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseEdit}
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

export default EditUser;
