import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  errorToaster,
  successToaster,
  warningToaster,
} from "../services/toastify.service";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // redirect sign in page
  const navigate = useNavigate();
  const redirectSignIn = () => {
    navigate("/");
  };

  // on button  submit
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password, fullName };
    console.log(data); //{email: 'kalu@gmail.com', password: 'djhkfjd', fullName: 'Bidhya Khadka'}

    // // api hit for registration
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await axios.post(`${SERVER_URL}/users/register`, data);
      if (response.data.status) {
        successToaster(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(response.data.message);

      errorToaster(error.response.data.message);
    }
  };

  return (
    <div className="container border border-primary bg-secondary p-5 rounded-5">
      <div className="p-3 border border-primary bg-light rounded-5">
        <h2 className="mb-3">Register</h2>
        <Form onSubmit={submitHandler}>
          <FloatingLabel
            controlId="floatingInput1"
            label="Full Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="full name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput2"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
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
            <div>
              I Accept the{" "}
              <span className="text-success fw-bold">Terms of use</span>{" "}
              <span className="fw-bold">&</span>{" "}
              <span className="text-success fw-bold">Privacy Policy</span>
            </div>
          </div>

          <div className="">
            <Button type="submit" variant="success" className="px-5">
              Register Now
            </Button>
          </div>
        </Form>
      </div>

      <div className="mt-4 text-light fs-5">
        Already have an account ?
        <span>
          <button
            onClick={redirectSignIn}
            className="p-0 text-decoration-underline bg-secondary border-0 text-light"
          >
            Sign In
          </button>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
