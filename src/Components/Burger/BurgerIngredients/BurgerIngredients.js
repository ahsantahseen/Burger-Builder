import React, { Component } from "react";
import classes from "../BurgerIngredients/BurgerIngredients.module.css";
import PropTypes from "prop-types";

class BurgerIngredients extends Component {
  render() {
    let indgredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        indgredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        indgredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        indgredient = <div className={classes.Meat}></div>;
        break;
      case "salad":
        indgredient = <div className={classes.Salad}></div>;
        break;

      case "cheese":
        indgredient = <div className={classes.Cheese}></div>;
        break;
      default:
        indgredient = null;
    }
    return indgredient;
  }
}
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
