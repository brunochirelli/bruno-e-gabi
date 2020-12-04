import { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import CartDrawer from "../cart/CartDrawer";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cart = useSelector((state) => state.cart);

  const location = useLocation();

  useEffect(() => {
    setOpen(true);

    if (
      cart.products.length === 0 ||
      location.pathname === "/carrinho" ||
      location.pathname === "/checkout"
    ) {
      setOpen(false);
    }
  }, [cart]);

  useEffect(() => {
    return setOpen(false);
  }, [location]);

  return (
    <>
      <AppBar position="fixed" elevation={0} color="inherit" id="main-header">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton onClick={() => setMenuOpen(true)}>
            <Menu />
          </IconButton>
          <MenuOverlay open={menuOpen} setOpen={setMenuOpen} />

          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ color: "black", textDecoration: "none" }}
          >
            Bruno e Gabi
          </Typography>

          <IconButton
            onClick={() =>
              location.pathname === "/carrinho" ||
              location.pathname === "/checkout"
                ? null
                : setOpen(!open)
            }
          >
            <Badge
              badgeContent={cart.products && cart.products.length}
              color="primary"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
          <CartDrawer open={open} setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
