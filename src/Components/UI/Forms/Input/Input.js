import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.InputType) {
    case "input":
      inputElement = (
        <input {...props} className={classes.InputElement}></input>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea {...props} className={classes.InputElement}></textarea>
      );
      break;

    default:
      inputElement = (
        <input {...props} className={classes.InputElement}></input>
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
