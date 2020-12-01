import { Box, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { addGift } from "../cart/cartSlice";

const GiftCard = ({ gift }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Box bgcolor="white" width="100%" height="200px">
        <img
          src={gift.productImage.url}
          alt=""
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <div>{gift.productName}</div>
          <div>R$ {gift.price}</div>
        </div>
        <IconButton onClick={() => dispatch(addGift(gift))}>
          <AddShoppingCart />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GiftCard;
