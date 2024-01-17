/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import "./login.css";

//image imports
import breakfast00 from "../../assets/break_logo.20.png";
import breakfast01 from "../../assets/break_logo.30.jpeg";
import breakfast02 from "../../assets/break_logo.40.jpg";
import breakfast03 from "../../assets/break_logo.50.png";
import breakfast04 from "../../assets/break_logo.png";
import breakfast05 from "../../assets/break_logo.20_no.png";

const Login = () => {
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
  return (
    <div className={`login p-5  flex flex-col justify-evenly text-[12px]`}>
      <div>
        <h2 className="text-center font-extrabold text-[35px] text-blue-500">
          Make your Order Now!
        </h2>
      </div>

      <div className="flex justify-end items-end p-2 gap-10">
        <Link to="/password/set_password">
          <Button
            // onClick={(event) => submitForm(event)}
            variant="secondary"
            type="button"
            size="sm"
            className="text-[12px]"
          >
            SetPassword
          </Button>
        </Link>

        <Link to="/password/reset_password">
          <Button
            // onClick={notify}
            variant="warning"
            type="button"
            size="sm"
          >
            Forgot Password
          </Button>
        </Link>
      </div>

      <div className="content flex justify-evenly">
        <div className={`img items-center flex justify-center`}>
          <img
            src={breakfast01}
            alt="breakfast"
            className="h-[100px] w-[100px] rounded-full"
          />
        </div>

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
                <p className="font-bold italic text-yellow-400">
                  Login if you already set your password
                </p>
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
                        {/* UserName is required. */}
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required={true}
                        name="password"
                        type="password"
                        placeholder="Enter Password."
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {/* password is required. */}
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>

          <div className="flex gap-2 justify-center">
            <Link to="/home">
              <Button
                // onClick={(event) => submitForm(event)}
                variant="success"
                type="button"
                size="sm"
                className="rounded-full"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
