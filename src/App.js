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
