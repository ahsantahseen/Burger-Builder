import React, { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
  };

  render() {
    return (
      <div className={classes.contact_data}>
        <h3>Enter Details</h3>
        <form>
          <input type="text" name="name" placeholder="your Name"></input>
          <input type="email" name="email" placeholder="your Email"></input>

          <Button Btntype="Success">Order</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
