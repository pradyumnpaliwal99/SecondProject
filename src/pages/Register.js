import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import axios from "axios";
const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new value for the specific field
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleClick = async () => {
    const body = {
      email: userDetails.email,
      password: userDetails.password,
      role: userDetails.role,
    };
    console.log(body);
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      body
    );
    console.log(response);
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SIGN UP</h1>
        <div className="loginsignup-fields">
          <input
            value={userDetails.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your email"
          />
          <input
            value={userDetails.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Your password"
          />
          <input
            value={userDetails.role}
            name="role"
            onChange={handleInputChange}
            type="text"
            placeholder="Your role"
          />
        </div>
        <button onClick={handleClick}>Register</button>
        <p className="loginsignup-login">Already have an account?</p>
        <div className="login-button">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
