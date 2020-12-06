import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * Thank Yout Page
 *
 * @component
 * @version       0.1.0
 * @description   Page thats redirect a user if the payment was succesfull
 *
 */

const ThankYou = () => {
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
        <Typography variant="h6" align="center">
          Parece que você ainda não confirmou presença, gostaria de fazer isso
          agora?
        </Typography>
        <Box display="flex" justifyContent="center" marginY={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/portal"
          >
            Confirmar presença
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYou;
