import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h2>Burger Builder 1.0</h2>
        </Layout>
      </div>
    );
  }
}

export default App;
