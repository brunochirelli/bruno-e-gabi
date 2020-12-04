import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";

import { cleanCart } from "./cartSlice";

/**
 * Checkout Page
 *
 * @component
 * @version       0.1.0
 * @description   Page checkout tha handles information and redux logic to
 *                proccess the cart
 *
 */

const Checkout = () => {
  const [order, setOrder] = useState(false);
  // const order = useSelector((state) => state.cart.orderPlace)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (order) history.push("/obrigado");
  }, [order]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(cleanCart());
      setOrder(true);
    }, 5000);
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
