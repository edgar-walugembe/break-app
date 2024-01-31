/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import "./login.css";

//image imports
import { logo_spin } from "../../assets";

const Login = () => {
  //form Handling
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const submitForm = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    // devRef.current.requestSubmit();
    // fetchDev();
  };

  //route Handling
  const handleLogin = (role) => {
    if (role === "admin") {
      window.location.href = "/Admin/Dashboard";
    } else if (role === "user") {
      window.location.href = "/User/home";
    }
  };

  return (
    <div className={`login p-5  flex flex-col justify-evenly text-[12px]`}>
      <div className="mb-2">
        <h2 className="text-center text-white font-bold text-[35px]">
          Make Your Order Now !
        </h2>
      </div>

      <div className="content flex justify-evenly">
        <div className={`img items-center flex justify-center`}>
          <img
            src={logo_spin}
            alt="breakfast"
            className="h-[140px] w-[140px] rounded-full animate-spin animate-spin-slow"
          />
        </div>

        <div className="form p-2">
          <div className="flex justify-end items-end p-2 gap-10">
            <div className={`rounded forgotSpan mb-2`}>
              <Link
                to="/password/reset_password"
                className="flex justify-evenly w-full p-2 "
              >
                <span className="text-black font-semibold text-[14px]">
                  Forgot Password
                </span>
              </Link>
            </div>
          </div>

          <Formik
            validationSchema={schema}
            // onSubmit={saveDev}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              gender: "",
              dob: "",
            }}
          >
            {({ handleChange, values, touched, errors }) => (
              <Form
              // noValidate
              // validated={validated}
              // ref={}
              // onSubmit={}
              // autoComplete="true"
              >
                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Control
                        required={true}
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control
                        required={true}
                        name="password"
                        type="password"
                        placeholder="Password."
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>

          <div className="flex gap-2 justify-center">
            <div
              className={`rounded loginSpan`}
              onClick={() => handleLogin("admin")}
            >
              <Link
                // to="/Admin/Dashboard"
                // to="/User/home"
                className="flex justify-evenly w-full p-2 "
              >
                <span className="text-black font-semibold text-[14px]">
                  Log In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
