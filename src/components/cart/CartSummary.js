import { useSelector } from "react-redux";

import { Box, Button, Grid, Typography } from "@material-ui/core";
import { toCurrencyFormat } from "../../utils/toCurrencyFormat";
import { Link } from "react-router-dom";

const CartSummary = ({ buyButtonText = "Comprar", checkout }) => {
  const cart = useSelector((state) => state.cart);

  return (
    !!cart.products.length && (
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Box bgcolor="#ebe4dd" padding="0.75rem" borderRadius="0.5rem">
            <Typography variant="h5" tabIndex={0} align="center">
              Total {toCurrencyFormat(cart.total)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
            component={Link}
            to={checkout ? "/checkout" : "/carrinho"}
            style={{ padding: "1rem 1.5rem" }}
          >
            {buyButtonText}
          </Button>
        </Grid>
      </Grid>
    )
  );
};

export default CartSummary;
