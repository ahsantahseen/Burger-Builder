import React from "react";
import NavitionItems from "../NavigationItems/NavigationItems";
import Title from "../../Title/Title";
import classes from "./SideToolbar.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
const SideToolBar = (props) => {
  console.log("Side");
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
      <div>
        <nav className={classes.SideDrawer}>
          <NavitionItems></NavitionItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideToolBar;
