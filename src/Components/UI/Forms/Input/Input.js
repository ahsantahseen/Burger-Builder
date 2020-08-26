import React from "react";

const Input = (props) => {
  let inputElement = null;
  switch (props.InputType) {
    case "input":
      inputElement = <input {...props}></input>;
      break;
    case "textarea":
      inputElement = <textarea {...props}></textarea>;
      break;

    default:
      inputElement = <input {...props}></input>;
      break;
  }
  return (
    <div>
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
