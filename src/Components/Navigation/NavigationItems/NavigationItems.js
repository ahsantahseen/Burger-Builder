import React,{useState} from "react";
import classes from "./NavigationItems.module.css"
import NavigationItem from "../NavigationItem/NavigationItem";
import {useAuth} from "../../../Contexts/AuthContext"
import {Link,useHistory} from "react-router-dom"

const NavigationItems = () => {
  const {Logout}=useAuth();

const history=useHistory();
const [error, seterror] = useState('');
 

const handleLogout=async()=>{
  seterror('')
  try{
    await Logout()
    history.push("/login")
  }
  catch{
     seterror("Failure! cannot logout")
   }
 }

  
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <div className={classes.NavigationItem} onClick={handleLogout}>Logout</div>
      <NavigationItem link="/update-profile">Update Profile</NavigationItem>  
    </ul>
  );
};

export default NavigationItems;
