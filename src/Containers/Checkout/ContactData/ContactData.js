import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../orders-axios";
import Spinner from "../../../Components/UI/Spinnner/Spinner";
import Input from "../../../Components/UI/Forms/Input/Input";

const dummy_names = ["Ali", "Amin", "Bilal", "Ahsan", "Tahseen", "Tabassum"];
const dummy_location = [
  "Karachi-FB AREA",
  "Karachi-Saddar",
  "Karachi-Clifton",
  "Karachi-PECHS",
  "Karachi-Nursery",
];
const dummy_numbers = ["052523", "525251", "145523", "123453", "435355"];

const dummy_delivery_type = ["Fastest", "Normal", "Urgent", "Casual"];

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    loading: false,
    purchasing: true,
  };

  orderSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const customerOrders = {
      ingredients: this.props.ingredients,
      Total_Price: this.props.price + "$",
      customer_details: {
        name: dummy_names[Math.floor(Math.random() * dummy_names.length)],
        location:
          dummy_location[Math.floor(Math.random() * dummy_location.length)],
        contact_number:
          dummy_numbers[Math.floor(Math.random() * dummy_numbers.length)],
      },

      delivery_type:
        dummy_delivery_type[
          Math.floor(Math.random() * dummy_delivery_type.length)
        ],
      delivery_date: this.props.date,
    };

    axios
      .post("customerOrders.json", customerOrders)
      .then(
        (Response) => this.setState({ loading: false, purchasing: false }),
        this.props.history.push("/orders")
      )
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };
  render() {
    let form = (
      <form>
        <Input inputtype="input" label="Name" type="text" name="name"></Input>

        <Input
          inputtype="input"
          label="Contact Number"
          type="text"
          name="name"
        ></Input>

        <Input
          inputtype="input"
          label="Location"
          type="text"
          name="name"
        ></Input>

        <Input
          inputtype="drop-down"
          label="Delivery Type"
          options={dummy_delivery_type}
          placeholder="Select Delivery Type"
          name="delivery-type"
        ></Input>
        <Button Btntype="Success" clicked={(event) => this.orderSubmit(event)}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={classes.contact_data}>
        <h3>Enter Details</h3>
        {form}
      </div>
    );
  }
}
export default withRouter(ContactData);
