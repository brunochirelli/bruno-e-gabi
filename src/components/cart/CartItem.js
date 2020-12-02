import { Grid, IconButton, Typography } from "@material-ui/core";
import { Add, DeleteOutline, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateQuantity } from "./cartSlice";

const FancyControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: row;
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

const CartItem = ({ gift }) => {
  const dispatch = useDispatch();

  return (
    <FancyCartItem container justify="space-around" alignItems="center">
      <Grid
        item
        xs={2}
        style={{ background: "white", padding: "0.25rem", flexGrow: 1 }}
      >
        <img
          src={gift.productImage.url}
          alt=""
          style={{ objectFit: "contain", width: "100%", height: "90px" }}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography>{gift.productName}</Typography>
        <Typography>R$ {gift.price * gift.quantity}</Typography>
      </Grid>
      <Grid item xs={1} sm={2}>
        <FancyControl>
          <IconButton
            onClick={() =>
              dispatch(updateQuantity({ id: gift.id, type: "decrement" }))
            }
          >
            {gift.quantity === 1 ? <DeleteOutline /> : <Remove />}
          </IconButton>
          <div>{gift.quantity}</div>
          <IconButton
            onClick={() =>
              dispatch(updateQuantity({ id: gift.id, type: "increment" }))
            }
          >
            <Add />
          </IconButton>
        </FancyControl>
      </Grid>
    </FancyCartItem>
  );
};

export default CartItem;
