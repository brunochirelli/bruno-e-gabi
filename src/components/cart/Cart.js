import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";

import styled from "styled-components";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartHelperLink from "./CartHelperLink";

const FancyCart = styled(Container)`
  .title {
    padding: 2rem 0;
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  .back-link {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart.products) {
    return;
  }

  return (
    <FancyCart maxWidth="md">
      <Typography className="title" variant="h3">
        Carrinho
      </Typography>
      {cart.products.map((gift) => (
        <CartItem gift={gift} key={gift.id} />
      ))}

      <CartHelperLink />

      <CartSummary buyButtonText="Finalizar Compra" checkout />
    </FancyCart>
  );
};

export default Cart;
