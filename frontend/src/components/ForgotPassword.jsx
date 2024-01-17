/* eslint-disable no-unused-vars */
import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast.success("Password has been reset successfully !");
};

const ForgotPassword = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    firstPassword: yup.string().required(),
    secondPassword: yup.string().required(),
  });
  return (
    <div className={`login p-5 flex flex-col justify-evenly`}>
      <div>
        <h1 className="text-center font-extrabold text-[50px] text-blue-500">
          Set New Password for Your Account
        </h1>
      </div>

      <div className="content flex justify-evenly">
        <div className="form text-blue-500 p-2">
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
                    <Form.Group className="mb-2" controlId="username">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control
                        required={true}
                        name="username"
                        type="text"
                        placeholder="Enter Username"
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
                    <Form.Group className="mb-2" controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        required={true}
                        name="email"
                        type="text"
                        placeholder="Enter E-mail."
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="firstPassword">
                      <Form.Label>Enter New Password</Form.Label>
                      <Form.Control
                        required={true}
                        name="firstPassword"
                        type="password"
                        placeholder="Enter New Password."
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

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="secondPassword">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control
                        required={true}
                        name="secondPassword"
                        type="password"
                        placeholder="Confirm New Password."
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
            <Button onClick={notify} variant="primary" type="button" size="md">
              Save New Password
            </Button>

            <Link to="/">
              <Button
                // onClick={(event) => submitForm(event)}
                variant="info"
                type="button"
                size="md"
              >
                Back to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
