import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./Components/UI/Spinnner/Spinner";
import Checkout from "./Containers/Checkout/Checkout";

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
          {this.state.show ? <BurgerBuilder></BurgerBuilder> : <Spinner />}
        </Layout>
      </div>
    );
  }
}

export default App;
