import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { errorToaster, successToaster } from "../services/toastify.service";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // navigate to home page
  const navigate = useNavigate();
  const redirectRegisterHandler = () => {
    navigate("/signup");
  };

  // on sign in button  submit
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data); //{email: 'kalu@gmail.com', password: 'djhkfjd'}
    // login api hit to post
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await axios.post(`${SERVER_URL}/users/login`, data);

      console.log(response);

      if (response.data.status) {
        successToaster(response.data.message);
        sessionStorage.setItem("isLoggedIn", true);
        navigate("/home");
      }
    } catch ({ response }) {
      // console.log(response.data.message);
      errorToaster(response.data.message);
    }
  };
  return (
    <>
      <div className="container border border-primary bg-secondary p-5 rounded-5">
        <div className="p-3 border border-primary bg-light rounded-5">
          <h2 className="mb-3">Sign In </h2>
          <h6>
            or{" "}
            <span className="text-success" onClick={redirectRegisterHandler}>
              create an account
            </span>
          </h6>
          <Form onSubmit={submitHandler}>
            <FloatingLabel
              controlId="floatingInput1"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="abc@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>

            <div className="m-3 d-flex justify-content-center">
              <Form.Check
                aria-label="option 1"
                size="lg"
                className="me-3 border-0"
              ></Form.Check>
              <div>Remember me</div>
            </div>

            <div className="">
              <Button type="submit" variant="success" className="px-5">
                Sign In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
