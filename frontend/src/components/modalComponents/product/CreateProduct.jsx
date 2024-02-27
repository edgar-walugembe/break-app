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

import { createPdtUrl_admin } from "../../../constants";
import PropTypes from "prop-types";

function CreateProduct() {
  const { validated, setValidated, openCreatePdt, setOpenCreatePdt } =
    useContext(ModalContext);

  const handleClose = () => {
    setOpenCreatePdt(false);
  };

  //TODO: make and import a fetchData func in productList component.
  // CreateProduct.propTypes = {
  //   fetchData: PropTypes.func,
  // };

  const pdtRef = useRef("null");

  const schema = Yup.object().shape({
    name: Yup.string().required("pdtName is required"),
    price: Yup.integer().required("pdtPrice is required"),
    img: Yup.string().required("pdtImage is required"),
  });

  const handleSubmit = async (values) => {
    const form = pdtRef.current;

    if (form && form.checkValidity() === true) {
      const newPdt = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        userType: form.userType.value,
        status: form.status.value,
        img: form.img.value,
      };

      console.log("Form values:", values);
      console.log("new form values:", newPdt);

      const res = await axios.post(createPdtUrl_admin, newPdt);

      try {
        if (res.status === 201) {
          form.reset();
          setValidated(false);
        } else {
          setValidated(true);
          console.error("Failed to add user:", res.data.message);
        }
      } catch (error) {
        console.error("Error adding user to database", error.message);
        console.error("Error details:", error);
        throw error;
      }
    } else {
      setValidated(true);
    }

    handleClose();
    // fetchData();
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
