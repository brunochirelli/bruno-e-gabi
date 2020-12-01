import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartGifts = useSelector((state) => state.cart.products);

  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ color: "black", textDecoration: "none" }}
        >
          Bruno e Gabi
        </Typography>
        <IconButton component={Link} to="/carrinho">
          <Badge badgeContent={cartGifts && cartGifts.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
