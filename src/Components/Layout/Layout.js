import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideToolBar from "../Navigation/SideToolBar/SideToolBar";
import Footerbar from "../UI/footerbar/footerbar";

export const Layout = (props) => {
  const [showSideToolbar, setshowSideToolbar] = useState(false);

  const SideToolBarCloseHandler = () => {
    setshowSideToolbar(!showSideToolbar);
  };
  return (
    <Auxiliary>
      <Toolbar clicked={SideToolBarCloseHandler}></Toolbar>
      <SideToolBar
        show={showSideToolbar}
        clicked={SideToolBarCloseHandler}
      ></SideToolBar>
      <main className={classes.Content}>{props.children}</main>
      <Footerbar></Footerbar>
    </Auxiliary>
  );
};

export default Layout;
