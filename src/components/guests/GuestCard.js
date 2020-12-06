import PropTypes from "prop-types";
import { Box, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

/**
 * Cart Page
 *
 * @component
 * @version       0.1.0
 * @description   Map all Cart Items and proceed checkout.
 *
 */

const GuestCard = ({ guest, updateFunction }) => {
  return (
    <FancyGuestCard
      component={Paper}
      onClick={() => updateFunction(guest.id)}
      style={{ opacity: guest.confirmed ? 0.5 : 1 }}
    >
      <Box>
        <Typography variant="h6" noWrap>
          {guest.name}
        </Typography>
        <Typography variant="caption">
          {guest.confirmed ? "Confirmado" : null}
        </Typography>
      </Box>
      <Typography>{guest.confirmed ? "Desconfirmar" : "Confirmar"}</Typography>
    </FancyGuestCard>
  );
};

const FancyGuestCard = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

GuestCard.propTypes = {
  guest: PropTypes.shape({
    name: PropTypes.string,
    confirmed: PropTypes.bool.isRequired,
  }).isRequired,
  updateFunction: PropTypes.func.isRequired,
};

export default GuestCard;
