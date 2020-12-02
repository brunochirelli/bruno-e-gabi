import {
  Box,
  Container,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

const FancyDrawer = styled(SwipeableDrawer)``;

const FancyContent = styled.div`
  width: 80vw;
  height: 100vh;
  background: #fffaf6;

  @media screen and (min-width: 600px) {
    width: 50vw;
  }
`;

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
            <CartItem gift={gift} key={`drawer-${gift.key}`} />
          ))}
        </Container>
      </FancyContent>
    </FancyDrawer>
  );
};

export default CartDrawer;
