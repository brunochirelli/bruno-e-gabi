import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useSelector } from "react-redux";

const FancyHelperLink = styled(Typography)`
  &.back-link {
    display: block;
    margin: 1.5rem auto 0.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  }
`;

const CartHelperLink = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const location = useLocation();

  return (
    <FancyHelperLink
      variant="h6"
      className="back-link"
      onClick={() => {
        cart.products.length && location.pathname !== "/carrinho"
          ? setOpen(false)
          : history.push("/presentes");
      }}
      style={{ cursor: "pointer" }}
    >
      <IconButton>
        <ArrowBack />
      </IconButton>
      {cart.products.length
        ? "Continuar gabrielando"
        : "Seu carrinho esta vazio, escolha alguns produtos"}
    </FancyHelperLink>
  );
};

export default CartHelperLink;
