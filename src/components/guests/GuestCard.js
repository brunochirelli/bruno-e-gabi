import { Box, Paper, Typography } from "@material-ui/core";

const GuestCard = ({ guest, updateFunction }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      margin="0.5rem auto"
      style={{ cursor: "pointer", opacity: guest.confirmed ? 0.5 : 1 }}
      component={Paper}
      onClick={() => updateFunction(guest, "confirmed", !guest.confirmed)}
    >
      <Typography noWrap>{guest.name}</Typography>
      <Typography>{guest.confirmed ? "Confirmado" : "Confirmar"}</Typography>
    </Box>
  );
};

export default GuestCard;
