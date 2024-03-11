import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/product_Display/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart((prev) => ({ ...prev, data }));

    console.log("cart", cart);
  };
  http://localhost:3000/
  return (
    <div>
      {console.log("cart", cart)}
      <ProductDisplay product={product} addToCart={addToCart} />
    </div>
  );
};

export default Product;
