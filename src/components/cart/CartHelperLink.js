import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useSelector } from "react-redux";

/**
 * Cart Helper Link
 *
 * @component
 * @version       0.1.0
 * @description   Link to handle the direction when the cart is empty or not
 *
 */

const CartHelperLink = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const location = useLocation();

  return (
    <FancyHelperLink
      variant="h6"
      onClick={() => {
        cart.products.length && location.pathname !== "/carrinho"
          ? setOpen(false)
          : history.push("/presentes");
      }}
    >
      <IconButton>
        <ArrowBack />
      </IconButton>
      {cart.products.length
        ? "Continuar comprando"
        : "Seu carrinho esta vazio, escolha alguns produtos"}
    </FancyHelperLink>
  );
};

const FancyHelperLink = styled(Typography)`
  display: block;
  margin: 1.5rem auto 0.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  cursor: pointer;
`;

CartHelperLink.propTypes = {
  setOpen: PropTypes.func,
};

export default CartHelperLink;
