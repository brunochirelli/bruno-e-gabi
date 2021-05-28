import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";

import CartDrawer from "../cart/CartDrawer";
import MenuOverlay from "./MenuOverlay";

/**
 * Site Header
 *
 * @component
 * @version       0.1.0
 * @description   Header of the layout. Handles all the logic inside the header
 *                included the menus states.
 *
 */

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    return setOpen(false);
  }, [location]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        id="main-header"
        data-testid="logo"
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            className={open ? "menu-open" : "menu-hidden"}
            onClick={() => setMenuOpen(true)}
            data-testid="overlay-menu"
          >
            <Menu />
          </IconButton>
          <MenuOverlay open={menuOpen} setOpen={setMenuOpen} />

          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ color: "black", textDecoration: "none" }}
          >
            Gabi e Bruninho
          </Typography>

          {location.pathname === "/carrinho" ||
          location.pathname === "/checkout" ? (
            <div></div>
          ) : (
            <>
              <IconButton
                onClick={() =>
                  location.pathname === "/carrinho" ||
                  location.pathname === "/checkout"
                    ? null
                    : setOpen(!open)
                }
              >
                <Badge
                  data-testid="cart"
                  badgeContent={cart.products && cart.products.length}
                  color="primary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <CartDrawer open={open} setOpen={setOpen} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
