import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Container, Typography } from "@material-ui/core";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CartHelperLink from "../components/cart/CartHelperLink";

/**
 * Cart Page
 *
 * @component
 * @version       0.1.0
 * @description   Map all Cart Items and proceed checkout
 *
 */

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

export default Cart;
