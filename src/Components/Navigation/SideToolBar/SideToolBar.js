import React from "react";
import NavitionItems from "../NavigationItems/NavigationItems";

import classes from "./SideToolbar.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
const SideToolBar = (props) => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
      <div>
        <nav className={attachedClass.join(" ")}>
          <p className={classes.text}>Burger Builder Menu</p>
          <NavitionItems></NavitionItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideToolBar;
