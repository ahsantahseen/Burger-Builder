import React from "react";
import classes from "../Burger/Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <BurgerIngredients key={igKey + i} type={igKey}></BurgerIngredients>
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Fill The Burger</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default Burger;
