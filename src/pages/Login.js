import React, { useState } from "react";
import "./CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const notify = () => toast("Login successfull!");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new value for the specific field
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      email: userDetails.email,
      password: userDetails.password,
    };
    console.log(body);
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      body
    );
    console.log(response);
    toast.success("Login successful!");
    setTimeout(navigate("/"), 3000);
    // navigate("/");
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
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
        </div>

        <div className="login-button">
          <button onClick={handleClick} className="login-btn">
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
