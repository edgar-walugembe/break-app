/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";

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
  Input,
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
    editUser,
    setEditUser,
    validated,
    setValidated,
  } = useContext(ModalContext);

  const handleCloseCreate = () => {
    setOpenCreateUser(false);
  };

  // const handleInputChange = (event) => {
  //   setInputValue({
  //     ...inputValue,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  const updateEditUser = (newValues) => {
    setEditUser((prevEditUser) => ({ ...prevEditUser, ...newValues }));
  };

  const userRef = useRef("null");

  const schema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string().required("Company is required"),
    type: Yup.string().required("User Type is required"),
    status: Yup.string().required("User Status is required"),
    // img: Yup.string().required("User is required"),
  });

  const saveUser = async (values) => {
    const form = userRef.current;

    if (form && form.checkValidity() === true) {
      const newUser = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        userType: form.type.value,
        status: form.status.value,
        img: form.img.value,
      };

      let res;
      console.log("Form values:", values);
      console.log("new form values:", newUser);

      if (editUser && editUser.id) {
        const updatedUser = { ...editUser, ...newUser };
        res = await axios.patch(`${editUser}?id=${editUser.id}`, updatedUser);
      } else {
        res = await axios.post(createUser, newUser);
      }
      form.reset();
      setValidated(false);

      console.log("Form values:", values);
      console.log("new form values:", newUser);

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
            userType: "",
            status: "",
            img: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            saveUser(values);
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form
              noValidate
              validated={validated.toString()}
              ref={userRef}
              autoComplete="off"
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
                  <FormControl autoFocus fullWidth margin="dense">
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="name"
                      name="name"
                      label="Username"
                      type="text"
                      fullWidth
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && !!errors.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>

                  <FormControl autoFocus fullWidth margin="dense">
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="email"
                      name="email"
                      label="E-mail"
                      type="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && !!errors.email}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>
                </div>

                <div className="flex gap-4">
                  <FormControl autoFocus fullWidth margin="dense">
                    <InputLabel id="company-label">Company</InputLabel>
                    <Select
                      labelId="company-label"
                      id="company"
                      name="company"
                      value={values.company}
                      label="Company"
                      onChange={handleChange}
                      error={touched.company && !!errors.company}
                    >
                      <MenuItem value={"Odyssey"}>Odyssey</MenuItem>
                      <MenuItem value={"Upti"}>Upti</MenuItem>
                    </Select>
                    <ErrorMessage
                      name="company"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>

                  <FormControl autoFocus fullWidth margin="dense">
                    <InputLabel id="type-label">User Type</InputLabel>
                    <Select
                      labelId="type-label"
                      id="userType"
                      name="userType"
                      value={values.userType}
                      label="User Type"
                      onChange={handleChange}
                      error={touched.userType && !!errors.userType}
                    >
                      <MenuItem value={"SuperAdmin"}>SuperAdmin</MenuItem>
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                      <MenuItem value={"User"}>User</MenuItem>
                    </Select>
                    <ErrorMessage
                      name="userType"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>
                </div>

                <div className="flex gap-4">
                  <FormControl autoFocus fullWidth margin="dense">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      id="status"
                      name="status"
                      value={values.status}
                      label="Status"
                      onChange={handleChange}
                      error={touched.status && !!errors.status}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                      <MenuItem value={"Suspended"}>Suspended</MenuItem>
                    </Select>
                    <ErrorMessage
                      name="status"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>

                  <FormControl autoFocus fullWidth margin="dense">
                    <TextField
                      autoFocus
                      margin="dense"
                      id="img"
                      name="img"
                      type="file"
                      fullWidth
                      onChange={handleChange}
                    />

                    {/* error={touched.img && !!errors.img} */}
                    <ErrorMessage
                      name="img"
                      component="p"
                      className="text-red-600"
                    />
                  </FormControl>
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
