import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import CategorySingle from "./pages/CategorySingle";
import Gifts from "./pages/Gifts";
import GiftSingle from "./pages/GiftSingle";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Guests from "./pages/Guests";
import GuestsLogin from "./pages/GuestsLogin";
import PrivateRoute from "./routes/PrivateRoute";
import { getChar } from "./utils/getData";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getChar();
  }, []);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/portal" component={GuestsLogin} />
          <PrivateRoute
            exact
            path="/familia"
            component={Guests}
            destination="/familia"
          />
          <Route exact path="/presentes" component={Gifts} />
          <Route exact path="/presentes/:gift" component={GiftSingle} />
          <Route
            exact
            path="/categorias/:category"
            component={CategorySingle}
          />
          <Route exact path="/carrinho" component={Cart} />
          <PrivateRoute
            exact
            path="/checkout"
            component={Checkout}
            destination="/checkout"
          />
          <Route exact path="/obrigado" component={ThankYou} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
