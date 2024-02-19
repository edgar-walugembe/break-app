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
import axios from "axios";

import {
  baseUrl,
  UserUrl,
  createUser,
  getUser,
  deleteUser,
  editUser,
} from "../../../constants";

function CreateUser() {
  const {
    inputValue,
    setInputValue,
    openCreateUser,
    setOpenCreateUser,
    userRef,
    editUser,
    setEditUser,
  } = useContext(ModalContext);

  const handleClickCreate = () => {
    setOpenCreateUser(true);
  };

  const handleCloseCreate = () => {
    setOpenCreateUser(false);
  };

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {};

  const updateEditUser = (newValues) => {
    setEditUser((prevEditUser) => ({ ...prevEditUser, ...newValues }));
  };

  const saveUser = async () => {
    const form = userRef.current;

    if (form && form.checkValidity() === true) {
      const newDev = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        type: form.type.value,
        status: form.status.value,
        img: form.img.value,
      };

      let res;

      if (editUser && editUser.id) {
        const updatedDev = { ...editUser, ...newDev };
        res = await axios.patch(`${editUser}?id=${editUser.id}`, updatedDev);
      } else {
        res = await axios.post(createUser, newDev);
      }
      form.reset();
      setValidated(false);

      try {
        if (res.status === 202 || res.status === 201) {
          updateEditUser(newDev);
          // closeCreateDevDialog();
          setEditUser(null);
        } else {
          setValidated(true);
          console.error("Failed to add/edit developer:", res.data.message);
        }
      } catch (error) {
        console.error("Error adding Dev to express_db:", error.message);
        console.error("Error details:", error);
        throw error;
      }
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Dialog open={openCreateUser} style={{ zIndex: 9999 }}>
        <DialogTitle className="flex justify-between">
          <span>Add New User</span>
          <div
            onClick={handleCloseCreate}
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
              value={inputValue}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="text"
              fullWidth
              value={inputValue}
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
              value={inputValue}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="type"
              label="User Type"
              type="text"
              fullWidth
              value={inputValue}
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
              value={inputValue}
              onChange={handleInputChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCreate}
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
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateUser;
