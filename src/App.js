import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import ThankYou from "./components/cart/ThankYou";
import CategorySingle from "./components/gifts/CategorySingle";
import Gifts from "./components/gifts/Gifts";
import GiftSingle from "./components/gifts/GiftSingle";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/presentes" component={Gifts} />
          <Route exact path="/presentes/:gift" component={GiftSingle} />
          <Route
            exact
            path="/categorias/:category"
            component={CategorySingle}
          />
          <Route exact path="/carrinho" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/obrigado" component={ThankYou} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
