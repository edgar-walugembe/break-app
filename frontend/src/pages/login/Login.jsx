/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import "./login.css";
import axios from "axios";

//image imports
import { logo_spin } from "../../assets";

const Login = () => {
  //form Handling
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  let res;
  const handleSubmit = async (e) => {
    e.preventDefault();

    res = await axios.post("http://localhost:8000", values);

    try {
      if (res.status === 200) {
        console.log("logged in successfully");
        navigate("/Admin/Dashboard");
      }
    } catch (error) {
      console.error("Error details:", error);
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

        <div className="form py-2 w-full">
          <div className="flex justify-end items-end p-0 gap-10">
            <div className={`rounded forgotSpan mb-2`}>
              <Link
                to="/password/reset_password/:id"
                className="flex justify-evenly w-full p-2 "
              >
                <span className="text-black font-semibold text-[14px]">
                  Forgot Password
                </span>
              </Link>
            </div>
          </div>

          <div className="mx-1">
            <Formik
              validationSchema={schema}
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, values, touched, errors }) => (
                <Form autoComplete="true">
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
                          placeholder="Password"
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

                  <div className="flex gap-2 justify-center">
                    <button type="submit" className={`rounded loginSpan`}>
                      <div>
                        <Link className="flex justify-evenly w-full p-2 ">
                          <span className="text-black font-semibold text-[14px]">
                            Log In
                          </span>
                        </Link>
                      </div>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
