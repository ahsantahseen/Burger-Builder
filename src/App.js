import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
