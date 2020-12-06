import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GuestCard from "../components/guests/GuestCard";

/**
 * Guests Confirmation Page
 *
 * @version       0.1.0
 * @description   Page to hold each guest information and confirmation status
 *
 */

const Guests = () => {
  const [thanksMessage, setThanksMessage] = useState(null);
  const [helper, setHelper] = useState(false);
  const [family, setFamily] = useState({
    id: "family-1",
    name: "Silva",
    side: "BRIDE",
    members: [
      {
        id: "member-1",
        name: "João",
        confirmed: false,
      },
      {
        id: "member-2",
        name: "Maria",
        confirmed: false,
      },
      {
        id: "member-3",
        name: "José",
        confirmed: false,
      },
      {
        id: "member-4",
        name: "Pedro",
        confirmed: false,
      },
    ],
    table: 10,
  });

  /**
   * Displays a helper button to indicates that the guest can buy gifts
   * if someone is confirmed and shows a glad message when all is confirmed
   */
  useEffect(() => {
    let findOne = family.members.find((member) => member.confirmed === true);
    if (!!findOne) {
      setHelper(true);
    } else {
      setHelper(false);
    }

    let findAll = family.members.filter((member) => member.confirmed === true);
    if (findAll.length === family.members.length) {
      setThanksMessage(true);
    } else {
      setThanksMessage(false);
    }
  }, [family]);

  /**
   * Update any property member
   *
   * @param {array} person Person array to be updated
   * @param {string} property Property to update
   * @param {any} value Value to be updated based on the property type
   */
  const updateGuest = (person, property, value) => {
    let updatedMembers = family.members.map((member) => {
      if (member.id === person.id) {
        member[property] = value;
        return member;
      } else {
        return member;
      }
    });

    setFamily((prev) => ({ ...prev, members: updatedMembers }));
  };

  return (
    <Container maxWidth="sm" style={{ margin: "6rem auto" }}>
      {thanksMessage ? (
        <Typography variant="h5" paragraph>
          Ebaa! Ficaremos muito felizes com a presença de todos vocês
        </Typography>
      ) : (
        <Box marginBottom={4}>
          <Typography variant="h3">Família {family.name}</Typography>
          <Typography paragraph>
            É com imenso prazer que convidamos vocês para nossa festa de
            casamento.
          </Typography>
          <Typography paragraph>
            Por favor, confirme a presença dos convidados para servirmos vocês
            da melhor forma possível no nosso dia especial.
          </Typography>
        </Box>
      )}
      {family.members.map((member) => (
        <GuestCard
          guest={member}
          updateFunction={updateGuest}
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
