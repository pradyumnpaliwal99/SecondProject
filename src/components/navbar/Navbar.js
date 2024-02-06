import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [cartLength, setCartLength] = useState();
  const fetchCartData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/cart/getCartDetails"
    );
    setCartLength(response.data.length);
    console.log("cartData", response);
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="link-style">
            Shop
          </Link>
          {/* <hr /> */}
        </li>
        <li>
          <Link to="/mens" className="link-style">
            Men
          </Link>
        </li>
        <li>
          <Link to="/womens" className="link-style">
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" className="link-style">
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login" className="link-style">
            Login
          </Link>
        </button>
        <img onClick={() => navigate("/cart")} src={cart_icon} alt="" />
        <div className="nav-cart-count">{cartLength}</div>
      </div>
    </div>
  );
};

export default Navbar;
