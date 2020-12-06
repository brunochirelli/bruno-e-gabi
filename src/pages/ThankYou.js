import { Box, Button, Container, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

/**
 * Thank Yout Page
 *
 * @component
 * @version       0.1.0
 * @description   Page thats redirect a user if the payment was succesfull
 *
 */

const ThankYou = () => {
  const family = useSelector((state) => state.guests.family);
  const orderIsSuccesful = useSelector((state) => state.cart.orderPlaced);

  /** Check if family has any member confirmed */
  const findOneConfirmed = () => {
    if (family.members) {
      return family.members.find((member) => member.confirmed === true);
    } else {
      return false;
    }
  };

  if (!orderIsSuccesful) return <div>Não foi processado</div>;

  return (
    <Box marginY={20}>
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          Seu pedido foi confirmado!
        </Typography>
        {!findOneConfirmed() && (
          <>
            <Typography variant="h6" align="center">
              Parece que você ainda não confirmou presença, gostaria de fazer
              isso agora?
            </Typography>
            <Box display="flex" justifyContent="center" marginY={3}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/familia"
              >
                Confirmar presença
              </Button>
            </Box>
          </>
        )}

        <Box display="flex" justifyContent="center" marginY={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/"
          >
            Voltar a home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYou;
