import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const fetchCartData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/cart/getCartDetails"
    );
    setCartDetails(response.data);
    console.log("cartData", response);
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div>
      {console.log("cartDetails", cartDetails)}
      {cartDetails.map((item, index) => {
        return (
          <Card className="mt-5" style={{ width: "50%", margin: "auto" }}>
            <Card.Body className="text-center px-5 py-4">
              <Card.Title className="fs-1">{item.name}</Card.Title>
              <Card.Text className="fs-3 fw-normal">
                Category: {item.category}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Cart;
