import React, { useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDisplay = (props) => {
  const { product, addToCart } = props;

  const onHandleClick = async () => {
    console.log("hi");

    const body = {
      id: product.id,
      name: product.name,
      category: product.category,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/addToCart",
        body
      );

      console.log("Response", response);
      toast.success("Product added to cart!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="productdisplay">
      {console.log("product", product)}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="side" />
          <img src={product.image} alt="side" />
          <img src={product.image} alt="side" />
          <img src={product.image} alt="side" />
        </div>
        <div className="procustdisplay-img">
          <img
            className="productdisplay-main-img"
            src="../assets/product_1/png"
            alt="Main Product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdiplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices"></div>
        <div className="productdisplay-right-price-old">
          ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">
          ${product.new_price}
        </div>
        <div className="productdisplay-right-desc">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={onHandleClick}>Add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirts, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Mordern, Latest
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ProductDisplay;
