import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Grid, IconButton, Typography } from "@material-ui/core";
import { Add, DeleteOutline, Remove } from "@material-ui/icons";

import { toCurrencyFormat } from "../../utils/toCurrencyFormat";
import { updateQuantity } from "../../redux/cart/cartSlice";

/**
 * Cart Item
 *
 * @component
 * @version       0.1.0
 * @description   Display single item in cart
 *
 */

const CartItem = ({ gift, verticalControl }) => {
  const dispatch = useDispatch();

  return (
    <FancyCartItem container justify="space-around" alignItems="center">
      <Grid
        item
        xs={2}
        style={{ background: "white", padding: "0.25rem", flexGrow: 1 }}
      >
        <img
          src={gift.image}
          alt=""
          style={{ objectFit: "contain", width: "100%", height: "90px" }}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography tabIndex={0} noWrap>
          {gift.title}
        </Typography>
        <Typography>{toCurrencyFormat(gift.price * gift.quantity)}</Typography>
      </Grid>
      <Grid item xs={1} sm={2}>
        <FancyControl flexDirection={verticalControl && !!verticalControl}>
          <IconButton
            onClick={() =>
              dispatch(updateQuantity({ id: gift.id, type: "decrement" }))
            }
            aria-label={gift.quantity === 1 ? "remover" : "retirar um"}
          >
            {gift.quantity === 1 ? <DeleteOutline /> : <Remove />}
          </IconButton>
          <div tabIndex={0} aria-label="quantidade atual">
            {gift.quantity}
          </div>
          <IconButton
            onClick={() =>
              dispatch(updateQuantity({ id: gift.id, type: "increment" }))
            }
            aria-label="adicionar mais um"
          >
            <Add />
          </IconButton>
        </FancyControl>
      </Grid>
    </FancyCartItem>
  );
};

const FancyControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? "column" : "row"};
  }
`;

const FancyCartItem = styled(Grid)`
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem 0;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(87, 39, 0, 0.05);

  img {
    max-width: 70px;
    padding: 0.1rem;
  }
`;

CartItem.propType = {
  gift: PropTypes.object.isRequired,
  verticalControl: PropTypes.bool,
};

export default CartItem;
