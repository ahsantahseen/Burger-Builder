import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./Components/UI/Spinnner/Spinner";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Containers/Orders/Orders"

class App extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                this.state.show ? <BurgerBuilder></BurgerBuilder> : <Spinner />
              }
            />
            
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/orders" component={Orders}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
