import React, { Component } from "react";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import BurgerBuilder from "../src/Containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./Components/UI/Spinnner/Spinner";
import Checkout from "./Containers/Checkout/Checkout";
import {BrowserRouter as Router , Switch, Route, Redirect} from "react-router-dom";
import Orders from "./Containers/Orders/Orders"
import Privateroute from "./Components/PrivateRoutes/Privateroute"
import Login from "./Containers/Login/Login"
import {AuthProvider} from "./Contexts/AuthContext"
import Signup from "./Containers/SignUp/Signup"
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword"
import UpdateProfile from "./Containers/UpdateProfile/UpdateProfile"

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
        
        <Router>  
        <AuthProvider>
          <Switch>
          
        <Route exact path="/login" component={Login}></Route>
        
        <Route path="/signup" component={Signup}></Route>
        
        <Route path="/forgot-password" component={ForgotPassword}></Route>
        
        <Layout>
            <Privateroute
              path="/"
              exact
              component={routeProps =>(
                this.state.show ? <BurgerBuilder></BurgerBuilder> : <Spinner />
              )}
            >
            </Privateroute>
            <Privateroute path="/checkout" component={Checkout}></Privateroute>
            <Privateroute path="/orders" component={Orders}></Privateroute>
            <Privateroute path="/update-profile" component={UpdateProfile}></Privateroute>
            
            </Layout>
            
          </Switch>
          </AuthProvider>
          </Router>
        
      </div>
    );
  }
}

export default App;
