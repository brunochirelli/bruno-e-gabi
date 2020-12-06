import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Box, Button, Container, Typography } from "@material-ui/core";

import GuestCard from "../components/guests/GuestCard";
import { toggleConfirmation } from "../redux/guests/guestsSlice";
import GuestConfirmationDialog from "../components/guests/GuestConfirmationDialog";

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
    // bottom helper message
    let findOne = family.members.find((member) => member.confirmed === true);
    if (!!findOne) {
      setHelper(true);
    } else {
      setHelper(false);
    }

    // dialog handler
    let findAll = family.members.filter((member) => member.confirmed === true);
    if (findAll.length === family.members.length) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);
    }
  }, [family]);

  /**
   * If every member was confirmed, prevent the initial modal open
   */
  useEffect(() => {
    setOpenDialog(false);
  }, []);

  return (
    <Container maxWidth="sm" style={{ margin: "6rem auto" }}>
      <GuestConfirmationDialog open={openDialog} setOpen={setOpenDialog} />

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

      {family.members.map((member) => (
        <GuestCard
          guest={member}
          updateFunction={handleConfirmation}
          key={member.id}
        />
      ))}

      {helper ? (
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
