import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const signupNameRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupEmailRef = useRef(null);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    signup(signupEmailRef.current.value, signupPasswordRef.current.value)
      .then((userCredential) => {
        setTimeout(() => navigate("/"), 700);
      })
      .catch((error) => {});
  };
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to={"/login"}>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
