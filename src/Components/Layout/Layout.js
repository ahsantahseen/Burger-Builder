import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideToolBar from "../Navigation/SideToolBar/SideToolBar";

export const Layout = (props) => {
  const [showSideToolbar, setshowSideToolbar] = useState(true);

  const SideToolBarCloseHandler = () => {
    setshowSideToolbar(false);
  };
  return (
    <Auxiliary>
      <Toolbar></Toolbar>
      <SideToolBar
        show={showSideToolbar}
        clicked={SideToolBarCloseHandler}
      ></SideToolBar>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
