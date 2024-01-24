/* eslint-disable no-unused-vars */
import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SetPassword = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <div className={`login p-5 flex flex-col justify-evenly text-[12px]`}>
      <div>
        <h1 className="text-center font-extrabold text-[35px] text-blue-500">
          Set A Password for Your Account
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
                {/* <p>Login if you already set your password</p> */}
                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="username">
                      <Form.Label>UserName</Form.Label>
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

                {/* <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        required={true}
                        name="email"
                        type="text"
                        placeholder="E-mail."
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row> */}

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Group className="mb-2" controlId="firstPassword">
                      {/* <Form.Label>Enter Password</Form.Label> */}
                      <Form.Control
                        required={true}
                        name="firstPassword"
                        type="password"
                        placeholder="Enter Password."
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
                      {/* <Form.Label>Confirm Password</Form.Label> */}
                      <Form.Control
                        required={true}
                        name="secondPassword"
                        type="password"
                        placeholder="Confirm Password."
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
            <Link to="/home">
              <Button
                // onClick={(event) => submitForm(event)}
                variant="primary"
                type="button"
                size="sm"
              >
                Save
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;

/** <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart} `}
      >
        <div className="flex flex-row items-center justify-center py-[6px] px-4 rounded-[10px] mb-2 gap-2 bg-yellow">
          <GiCash className="text-white w-[32px] h-[32px] animate-bounce" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">A daily </span> Budget
            <span className="text-white"> of UgSh</span> 2000
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Order Your
            <br className="sm:block hidden" /> {""}
            <span className="text-yellow">BreakFast Snack</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          {" "}
          At Your Convenience.
        </h1>
        <div className=""></div> 
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}
      >
        <img
          src={logo_spin}
          alt="breakfast_logo"
          className="w-[400px] h-[400px] rounded-full animate-spin animate-spin-slow"
        />
      </div>
    </section> */
