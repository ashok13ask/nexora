/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  FormGroup,
  Label,
  CardText,
  CardSubtitle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form">
              <Card
                className="card-user card-white"
                style={{ height: "400px" }}
              >
                {/* <CardHeader>
                  <img alt="..." src={require("assets/img/card-primary.png")} />
                </CardHeader> */}
                <CardBody>
                  <CardTitle
                    tag="h1"
                    className="text-dark"
                    style={{ fontWeight: 700 }}
                  >
                    Login
                  </CardTitle>
                  {/* <CardText className="text-dark">
                    <b>Welcome Back!</b> <br/>
                    You can login to access with your existing Account.
                  </CardText> */}
                  <InputGroup
                  style={{marginTop:'100px'}}
                    className={classnames({
                      "input-group-focus": state.emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setState({ ...state, emailFocus: true })}
                      onBlur={(e) => setState({ ...state, emailFocus: false })}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": state.passFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type={state?.showPassword ? "text" : "password"}
                      onFocus={(e) => setState({ ...state, passFocus: true })}
                      onBlur={(e) => setState({ ...state, passFocus: false })}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input
                        type="checkbox"
                        onClick={() =>
                          setState({
                            ...state,
                            showPassword: !state.showPassword,
                          })
                        }
                      />
                      <span className="form-check-sign" />
                      <a href="#" style={{ fontSize: "10px" }}>
                        Show Password
                      </a>
                    </Label>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button
                    block
                    className="mb-3"
                    color="primary"
                    onClick={() => navigate("/admin/dashboard")}
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <div className="pull-left">
                    <h6>
                      <a
                        className="link footer-link"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/auth/register")}
                      >
                        Create Account
                      </a>
                    </h6>
                  </div>
                  <div className="pull-right">
                    <h6>
                      <a
                        className="link footer-link"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Need Help?
                      </a>
                    </h6>
                  </div>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;