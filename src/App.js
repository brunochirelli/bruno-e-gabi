import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Gifts from "./components/gifts/Gifts";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/carrinho" component={Cart} />
          <Route exact path="/produtos" component={Gifts} />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
