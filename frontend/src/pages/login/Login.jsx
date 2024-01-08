/* eslint-disable no-unused-vars */
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import "./login.css";
import breakfast00 from "../../assets/break_logo.20.png";
import breakfast01 from "../../assets/break_logo.30.jpeg";
import breakfast02 from "../../assets/break_logo.40.jpg";
import breakfast03 from "../../assets/break_logo.50.png";
import breakfast04 from "../../assets/break_logo.png";

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
    <div className="login p-5 flex flex-col justify-evenly">
      <h1 className="text-center font-extrabold text-[50px] text-blue-500">
        Make your Order Now!
      </h1>

      <div className="flex justify-around">
        <div>
          <img src={breakfast04} alt="breakfast" />
        </div>

        <div>
          <h2 className="text-center font-bold text-[30px] text-white">
            LOGIN
          </h2>
          <div className="form p-5">
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
                  autoComplete="true"
                  className="gap-40"
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
                          {/* UserName is required. */}
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
                          {/* E-mail is required. */}
                          {errors.email}
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
            <Button
              onClick={(event) => submitForm(event)}
              variant="success"
              type="Button"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
