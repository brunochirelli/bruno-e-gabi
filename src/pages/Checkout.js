import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";

import { cleanCart, processOrder } from "../redux/cart/cartSlice";

/**
 * Checkout Page
 *
 * @component
 * @version       0.1.0
 * @description   Page checkout tha handles information and redux logic to
 *                proccess the cart
 *
 *  This pages contains some mock logic that is only useful in development.
 *
 *! The production logic should process de cart and send to the payment gateway
 *  and operate the given result. Pay attention to it!
 *
 */

const Checkout = () => {
  const order = useSelector((state) => state.cart.orderPlaced);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(cleanCart());
      dispatch(processOrder());
      history.push("/obrigado");
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box paddingY={10}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center">
          Estamos te redirecionando para o pagamento. Não feche esta aba,
          retornaremos aqui quando o pedido for concluído
        </Typography>

        <Box display="flex" justifyContent="center" marginY={3}>
          <CircularProgress
            color="primary"
            aria-describedby="Aguardando pagamento"
            aria-busy="true"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
