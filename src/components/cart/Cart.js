import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart.products) {
    return;
  }

  return (
    <Container maxWidth="md">
      {cart.products.map((gift) => (
        <CartItem gift={gift} key={gift.id} />
      ))}
    </Container>
  );
};

export default Cart;
