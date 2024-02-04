import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/product_Display/ProductDisplay";
import axios from "axios";

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart((prev) => ({ ...prev, data }));
  };
  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/products/getAllProduct"
    );
    const product = response.data.find((e) => e.id === Number(productId));
    console.log("Response", response);
    setProductDetails(product);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ProductDisplay product={productDetails} addToCart={addToCart} />
    </div>
  );
};

export default Product;
