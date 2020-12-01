import { Grid, Typography } from "@material-ui/core";
import React from "react";

const CartItem = ({ gift }) => {
  return (
    <Grid container justify="space-between">
      <Grid
        item
        xs={6}
        sm={4}
        md={3}
        style={{ maxWidth: "100px", height: "75px", background: "white" }}
      >
        <img
          src={gift.productImage.url}
          alt=""
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Typography>{gift.productName}</Typography>
        <Typography>{gift.price}</Typography>
        <div>{gift.quantity}</div>
      </Grid>
    </Grid>
  );
};

export default CartItem;
