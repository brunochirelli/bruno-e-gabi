import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";

import { addGift } from "../redux/cart/cartSlice";
import { fetchGifts } from "../redux/gifts/fetchGifts";
import { toCurrencyFormat } from "../utils/toCurrencyFormat";

/**
 * Single Gift Page
 *
 * @component
 * @version       0.1.0
 * @description   Page to handle information about one gift
 *
 */

const GiftSingle = () => {
  const [actualGift, setActualGift] = useState(null);
  const gifts = useSelector((state) => state.gifts.products);
  const { gift } = useParams();
  const dispatch = useDispatch();

  /**
   * Subscribe to gifts to check changes and execute the find
   */
  useEffect(() => {
    let findOne = gifts.find((item) => item.title.trim() === gift.trim());
    setActualGift(findOne);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gifts]);

  /**
   * Every time component renders, check if the store exists, else, do a fetch
   */
  useEffect(() => {
    if (gifts.length) {
      setActualGift(gifts.find((item) => item.title.trim() === gift.trim()));
    } else {
      dispatch(fetchGifts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!actualGift) return <LinearProgress />;

  return (
    <Container style={{ padding: 0 }}>
      <Grid container justify="space-around" alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          style={{ height: "50vh", background: "white" }}
        >
          <img
            src={actualGift.image}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={4} style={{ padding: "1rem" }}>
          <Typography
            variant="caption"
            paragraph
            component={Link}
            to={`/categorias/${gift.category}`}
            arial-label="categoria"
            style={{
              textTransform: "uppercase",
              fontWeight: 700,
              display: "block",
            }}
          >
            {actualGift.category}
          </Typography>
          <Typography variant="h3" paragraph>
            {actualGift.title}
          </Typography>
          <Typography paragraph>{actualGift.description}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">
              {toCurrencyFormat(actualGift.price)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => dispatch(addGift(actualGift))}
            >
              Adicionar ao carrinho
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftSingle;
