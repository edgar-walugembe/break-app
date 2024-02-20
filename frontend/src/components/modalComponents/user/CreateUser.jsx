/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

import { ModalContext } from "../../../contexts/ModalContext";
import { close } from "../../../assets";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";

import {
  baseUrl,
  UserUrl,
  createUser,
  getUser,
  deleteUser,
  editUser,
} from "../../../constants";

const CreateUser = () => {
  const {
    inputValue,
    setInputValue,
    openCreateUser,
    setOpenCreateUser,
    userRef,
    editUser,
    setEditUser,
    validated,
    setValidated,
  } = useContext(ModalContext);

  const handleCloseCreate = () => {
    setOpenCreateUser(false);
  };

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  const updateEditUser = (newValues) => {
    setEditUser((prevEditUser) => ({ ...prevEditUser, ...newValues }));
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    type: Yup.string().required("User Type is required"),
    status: Yup.string().required("User Status is required"),
    img: Yup.string().required("User is required"),
  });

  const saveUser = async (values) => {
    const form = userRef.current;

    if (form && form.checkValidity() === true) {
      const newUser = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        type: form.type.value,
        status: form.status.value,
        img: form.img.value,
      };

      let res;

      if (editUser && editUser.id) {
        const updatedUser = { ...editUser, ...newUser };
        res = await axios.patch(`${editUser}?id=${editUser.id}`, updatedUser);
      } else {
        res = await axios.post(createUser, newUser);
      }
      form.reset();
      setValidated(false);

      try {
        if (res.status === 202 || res.status === 201) {
          updateEditUser(newUser);
          setEditUser(null);
        } else {
          setValidated(true);
          console.error("Failed to add/edit user:", res.data.message);
        }
      } catch (error) {
        console.error("Error adding user to database", error.message);
        console.error("Error details:", error);
        throw error;
      }
    } else {
      setValidated(true);
    }
    console.log(values);
  };

  return (
    <div>
      <Dialog open={openCreateUser} style={{ zIndex: 0 }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            company: "",
            type: "",
            status: "",
            img: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            saveUser(values);
            setSubmitting(false);
          }}
        >
          {({ handleChange, values, touched, errors, handleSubmit }) => (
            <Form
              noValidate
              validated={validated}
              ref={userRef}
              onSubmit={saveUser}
              autoComplete="true"
            >
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
                    required={true}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Username"
                    type="text"
                    fullWidth
                    value={inputValue.name}
                    onChange={handleInputChange}
                    isInvalid={touched.name && !!errors.name}
                  />

                  <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="email"
                    label="E-mail"
                    type="text"
                    fullWidth
                    value={inputValue.email}
                    onChange={handleInputChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                </div>

                <div className="flex gap-4">
                  <FormControl
                    autoFocus
                    fullWidth
                    margin="dense"
                    required={true}
                    isInvalid={touched.company && !!errors.company}
                  >
                    <InputLabel id="company-label">Company</InputLabel>
                    <Select
                      labelId="company-label"
                      id="company"
                      value={company}
                      label="Company"
                      onChange={handleCompany}
                    >
                      <MenuItem value={"Odyssey"}>Odyssey</MenuItem>
                      <MenuItem value={"Upti"}>Upti</MenuItem>
                    </Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.company}
                    </Form.Control.Feedback>
                  </FormControl>

                  <FormControl autoFocus fullWidth margin="dense">
                    <InputLabel id="userType-label">User Type</InputLabel>
                    <Select
                      labelId="userType-label"
                      id="type"
                      value={type}
                      label="User Type"
                      onChange={handleType}
                    >
                      <MenuItem value={"SuperAdmin"}>SuperAdmin</MenuItem>
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                      <MenuItem value={"User"}>User</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="flex gap-4">
                  <FormControl autoFocus fullWidth margin="dense">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      id="status"
                      value={status}
                      label="Status"
                      onChange={handleStatus}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                      <MenuItem value={"Suspended"}>Suspended</MenuItem>
                    </Select>
                  </FormControl>

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
                  onClick={handleCloseCreate}
                  color="primary"
                  variant="contained"
                  style={{ background: "cyan", color: "black" }}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ background: "yellow", color: "black" }}
                  type="submit"
                >
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default CreateUser;
