import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/carrinho" component={Cart} /> */}
          {/* <Route exact path="/produtos" component={Gifts} /> */}
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
