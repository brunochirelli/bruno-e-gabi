import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import {
  Box,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";

/**
 * Menu Overlay
 *
 * @component
 * @version       0.1.0
 * @description   Overlay menu with links
 *
 */

const MenuOverlay = ({ open, setOpen }) => {
  const location = useLocation();

  useEffect(() => {
    // When location updates, close menu
    setOpen(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Typography variant="h5" component={Link} to="/portal">
              Presença
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
    transition: 0.18s all ease;

    &:hover {
      color: pink;
    }
  }

  @media screen and (min-width: 600px) {
    width: 50vw;
  }

  @media screen and (min-width: 900px) {
    width: 30vw;
    padding: 2rem;
  }
`;

MenuOverlay.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MenuOverlay;
