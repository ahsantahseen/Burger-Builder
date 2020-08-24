import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./Components/UI/Spinnner/Spinner";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";

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
              to="/"
              exact
              component={
                this.state.show ? <BurgerBuilder></BurgerBuilder> : <Spinner />
              }
            ></Route>
            <Route to="/checkout" exact component={Checkout}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
