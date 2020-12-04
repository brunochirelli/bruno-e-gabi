import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import { addGift } from "../cart/cartSlice";
import { truncateText } from "../../utils/truncateText";
import { toCurrencyFormat } from "../../utils/toCurrencyFormat";

/**
 * Gift Card
 *
 * @component
 * @version       0.1.0
 * @description   Card to handles information about one gift
 *
 */

const GiftCard = ({ gift, hideCategory, excerptLength = 40 }) => {
  const dispatch = useDispatch();

  return (
    <FancyCard container>
      <Grid item xs={6} sm={12}>
        <Box className="image" component={Link} to={`/presentes/${gift.title}`}>
          <img src={gift.image} alt="" />
        </Box>
      </Grid>
      <Grid item xs={6} sm={12} className="text">
        <div className="description">
          {!hideCategory && (
            <Typography
              variant="caption"
              className="category"
              component={Link}
              to={`/categorias/${gift.category}`}
              arial-label="categoria"
            >
              {gift.category}
            </Typography>
          )}
          <Box className="product-name">
            <Typography
              variant="body1"
              component={Link}
              to={`/presentes/${gift.title}`}
              style={{ fontSize: "1.2rem" }}
            >
              {truncateText(gift.title, excerptLength)}
            </Typography>
          </Box>
        </div>
        <div className="actions">
          <Typography className="product-price" aria-label="preço" tabIndex={0}>
            {toCurrencyFormat(gift.price)}
          </Typography>
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

const FancyCard = styled(Grid)`
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(87, 39, 0, 0.05);

  .image {
    display: block;
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

GiftCard.propTypes = {
  gift: PropTypes.object.isRequired,
  hideCategory: PropTypes.bool,
  excerptLength: PropTypes.number,
};

GiftCard.defaultProps = {
  excerptLength: 40,
};

export default GiftCard;
