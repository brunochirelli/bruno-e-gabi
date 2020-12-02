import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import { addGift } from "../cart/cartSlice";
import { truncateText } from "../../utils/utils";
import { Link } from "react-router-dom";

const FancyCard = styled(Grid)`
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(87, 39, 0, 0.05);

  .image {
    height: 180px;
    margin: 1rem;
    overflow: hidden;
    border-radius: 10px;

    @media screen and (min-width: 600px) {
      height: 170px;
    }

    img {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      object-fit: contain;
      border-radius: 1rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height: 170px;
    padding: 0.5rem;

    @media screen and (min-width: 600px) {
      padding: 1rem;
    }

    .product-name {
      margin: 1rem 0 0.5rem 0;

      a {
        font-size: 1.45rem;
        line-height: 1.2;
        text-decoration: none;
      }
    }

    .product-price {
      color: #bb5252;
      font-size: 1.3rem;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .add-to-cart {
        padding: 0.5rem;
        border: 0.1rem solid rgb(187, 82, 82, 0.3);

        &:hover {
          background: ${({ theme }) => theme.palette.background.default};
        }
      }

      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .description {
      flex-grow: 1;
      height: 100%;
      padding: 0.5rem 0 0 0;

      .category {
        font-weight: 700;
        font-size: 0.75rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
      }
    }
  }
`;

const GiftCard = ({ gift }) => {
  const dispatch = useDispatch();

  return (
    <FancyCard container>
      <Grid item xs={6} sm={12}>
        <div className="image">
          <img src={gift.productImage.url} alt="" />
        </div>
      </Grid>
      <Grid item xs={6} sm={12} className="text">
        <div className="description">
          <Typography variant="caption" className="category">
            Eletrodoméstico
          </Typography>
          <Box className="product-name">
            <Typography
              variant="body1"
              component={Link}
              to={`/presentes/${gift.productName}`}
            >
              {truncateText(gift.productName, 48)}
            </Typography>
          </Box>
        </div>
        <div className="actions">
          <Typography className="product-price">R$ {gift.price}</Typography>
          <IconButton
            className="add-to-cart"
            onClick={() => dispatch(addGift(gift))}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </Grid>
    </FancyCard>
  );
};

export default GiftCard;
