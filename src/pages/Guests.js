import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@material-ui/core";

import GuestCard from "../components/guests/GuestCard";
import { toggleConfirmation } from "../redux/guests/guestsSlice";

/**
 * Guests Confirmation Page
 *
 * @version       0.1.0
 * @description   Page to hold each guest information and confirmation status
 *
 */

const Guests = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [helper, setHelper] = useState(false);

  const dispatch = useDispatch();
  const family = useSelector((state) => state.guests.family);

  const handleConfirmation = (id) => dispatch(toggleConfirmation(id));

  useEffect(() => {
    let findOne = family.members.find((member) => member.confirmed === true);
    if (!!findOne) {
      setHelper(true);
    } else {
      setHelper(false);
    }

    let findAll = family.members.filter((member) => member.confirmed === true);
    if (findAll.length === family.members.length) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);
    }
  }, [family]);

  return (
    <Container maxWidth="sm" style={{ margin: "6rem auto" }}>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-describedby="Dialog de agradecimento"
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

      <Box marginBottom={4}>
        <Typography variant="h3">Família {family.name}</Typography>
        <Typography paragraph>
          É com imenso prazer que convidamos vocês para nossa festa de
          casamento.
        </Typography>
        <Typography paragraph>
          Por favor, confirme a presença dos convidados para servirmos vocês da
          melhor forma possível no nosso dia especial.
        </Typography>
      </Box>

      {console.log(family)}

      {family.members.map((member) => (
        <GuestCard
          guest={member}
          updateFunction={handleConfirmation}
          key={member.id}
        />
      ))}

      {helper ? (
        // TODO Check if family already bought a gift
        <Box margin="2rem auto">
          <Typography variant="h6">
            Compre o presente com mais praticidade
          </Typography>
          <Typography paragraph>
            Você também pode comprar um presente sem precisar de casa.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to="/presentes"
          >
            Comprar Presente
          </Button>
        </Box>
      ) : null}
    </Container>
  );
};

export default Guests;
