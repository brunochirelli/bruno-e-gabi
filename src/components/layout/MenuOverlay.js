import styled from "styled-components";

import {
  Box,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MenuOverlay = ({ open, setOpen, history }) => {
  const location = useLocation();

  useEffect(() => {
    // When location updates, close menu
    setOpen(false);
  }, [location]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <FancyOverlay>
        <List>
          <ListItem>
            <Typography variant="h5" component={Link} to="/">
              Home
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h5" component={Link} to="/presentes">
              Presentes
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h5" component={Link} to="/carrinho">
              Carrinho
            </Typography>
          </ListItem>
        </List>
      </FancyOverlay>
    </SwipeableDrawer>
  );
};

const FancyOverlay = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  min-height: 100vh;

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2rem;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    width: 50vw;
  }

  @media screen and (min-width: 900px) {
    width: 40vw;
  }
`;

export default MenuOverlay;
