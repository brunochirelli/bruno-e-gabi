import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";

import CartItem from "./CartItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const FancyCart = styled(Container)`
  .title {
    padding: 2rem 0;
    font-weight: 500;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  .back-link {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  }
`;

const FancyCheckout = styled(Grid)`
  background: #ebe4dd;

  button: {
    width: 100% !important;
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

      <Typography
        variant="h6"
        className="back-link"
        component={Link}
        to="/presentes"
        style={{ display: "block", margin: "1.5rem auto 0.5rem" }}
      >
        <IconButton>
          <ArrowBack />
        </IconButton>
        Continuar Comprando
      </Typography>

      <FancyCheckout container>
        <Grid item xs={12} sm={8} md={9} className="total">
          <Box
            display="flex"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
            padding={2}
          >
            <Typography variant="h5">Total</Typography>
            <Typography variant="h5">R$ {cart.total}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            disableElevation
            style={{ height: "100%" }}
          >
            Finalizar compra
          </Button>
        </Grid>
      </FancyCheckout>
    </FancyCart>
  );
};

export default Cart;
