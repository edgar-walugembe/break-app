/* eslint-disable no-unused-vars */
import { Form, Col, Row, Button } from "react-bootstrap";
import breakfast00 from "../../assets/break_logo.20.png";
import breakfast01 from "../../assets/break_logo.30.jpeg";
import breakfast02 from "../../assets/break_logo.40.jpg";
import breakfast03 from "../../assets/break_logo.50.png";
import breakfast04 from "../../assets/break_logo.png";

const Login = () => {
  return (
    <div className="flex justify-center login">
      <h1 className=" text-neutral-600">MAY I TAKE YOUR ORDER !</h1>
      <div className="flex ">
        <div>
          <img src={breakfast00} alt="breakfast" />
        </div>
        <div>
          <h2>Login</h2>
          <div className="form p-5">
            <Form
              // noValidate
              // validated={validated}
              // ref={}
              // onSubmit={}
              autoComplete="true"
            >
              <Row>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-2 flex" controlId="username">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                      required={true}
                      name="username"
                      type="text"
                      placeholder="Enter Username"
                    />
                    <Form.Control.Feedback type="invalid">
                      UserName is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-2 flex" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      required={true}
                      name="email"
                      type="text"
                      placeholder="Enter E-mail."
                    />
                    <Form.Control.Feedback type="invalid">
                      E-mail is required.
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
                    />
                    <Form.Control.Feedback type="invalid">
                      password is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
