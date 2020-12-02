import { useState } from "react";
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
import CartDrawer from "../cart/CartDrawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cartGifts = useSelector((state) => state.cart.products);

  return (
    <AppBar position="fixed" elevation={0} color="inherit" id="main-header">
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
        <IconButton onClick={() => setOpen(!open)}>
          <Badge badgeContent={cartGifts && cartGifts.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <CartDrawer open={open} setOpen={setOpen} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
