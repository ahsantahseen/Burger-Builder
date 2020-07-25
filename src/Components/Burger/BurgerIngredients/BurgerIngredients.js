import React from "react";
import classes from "BurgerIngredients.module.css";

const BurgerIngredients = (props) => {
  let indgredient = null;
  switch (props.type) {
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
      indgredient = <div className={classes.Cheese}></div>;
      break;

    case "cheese":
      indgredient = <div className={classes.Salad}></div>;
      break;
    default:
      indgredient = null;
  }
  return indgredient;
};

export default BurgerIngredients;
