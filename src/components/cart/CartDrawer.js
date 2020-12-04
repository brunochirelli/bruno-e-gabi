import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Box, Container, IconButton, SwipeableDrawer } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import CartHelperLink from "./CartHelperLink";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

/**
 * Cart Drawer
 *
 * @component
 * @version       0.1.0
 * @description   Summary cart that's displayed when cart updates.
 *
 */

const CartDrawer = ({ open, setOpen }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <FancyDrawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <FancyContent>
        <Container>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
          {cart.products.map((gift) => (
            <CartItem gift={gift} verticalControl key={`drawer-${gift.id}`} />
          ))}
          <Box margin={1}>
            <CartHelperLink setOpen={setOpen} />
            <CartSummary />
          </Box>
        </Container>
      </FancyContent>
    </FancyDrawer>
  );
};

const FancyDrawer = styled(SwipeableDrawer)``;

const FancyContent = styled.div`
  width: 80vw;
  min-height: 100vh;
  background: #fffaf6;

  @media screen and (min-width: 600px) {
    width: 50vw;
  }

  @media screen and (min-width: 900px) {
    width: 40vw;
  }
`;

CartDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CartDrawer;
