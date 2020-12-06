import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@material-ui/core";

const GuestConfirmationDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-describedby="Diálogo de agradecimento"
    >
      <Paper>
        <DialogTitle>Oba! Obrigado por confirmarem presença</DialogTitle>
        <DialogContent>
          <Typography paragraph>
            Agora que confirmou presença, que tal comprar o presente por aqui
            mesmo?
          </Typography>
          <Typography paragraph>
            Veja nossa lista de presentes e compre algo sem precisar sair de
            casa.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation component={Link} to="/">
            Voltar a home
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/presentes"
          >
            Comprar presentes
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};

GuestConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default GuestConfirmationDialog;
