import React from "react";
import NavitionItems from "../NavigationItems/NavigationItems";

import classes from "./SideToolbar.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FaHome} from 'react-icons/fa'
import {useAuth} from "../../../Contexts/AuthContext"

const SideToolBar = (props) => {
  const {currentUser}=useAuth()
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
      <div>
        <nav className={attachedClass.join(" ")}>
                  <h2 className="text-center mb-4"> <FaHome style={{verticalAlign:"-4px"}}/> Main Menu</h2>
                  
          <NavitionItems></NavitionItems>
          
        <h6 style={{marginTop:"300px"}}>Logged in as</h6>
        {currentUser?<p>{currentUser.email}</p>:<p>null</p>}
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideToolBar;
