import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addGift } from "../cart/cartSlice";

const GiftSingle = ({ history }) => {
  const [actualGift, setActualGift] = useState(null);
  const gifts = useSelector((state) => state.gifts.products);
  const { gift } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setActualGift(gifts.find((item) => item.productName === gift));
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
            src={actualGift.productImage.url}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={4} style={{ padding: "1rem" }}>
          <Typography>Categoria</Typography>
          <Typography>{actualGift.productName}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>R$ {actualGift.price}</Typography>
            <Button
              variant="contained"
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
