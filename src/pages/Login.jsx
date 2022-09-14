import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const loginNameRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const navigate = useNavigate();
  const { signin } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    signin(loginNameRef.current.value, loginPasswordRef.current.value)
      .then((userCredential) => {
        setError(false);
        setSuccess(true);
        setTimeout(() => navigate("/"), 700);
      })
      .catch((error) => {
        setError(true);
        setSuccess(false);
      });
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Login
                </button>
              </form>
              {error && <Alert color="danger">Wrong email or password</Alert>}
              {success && <Alert color="success">Login successfully</Alert>}
              <Link to={"/register"}>
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
