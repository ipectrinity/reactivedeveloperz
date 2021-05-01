import React from "react";
import classes from "./Header.module.css"

import logo from "../../Assets/help.svg"

const HeaderBlock = () => {
  return (
  <header className={classes.header}>
    <img className={classes.logo} src={logo} alt="logo"/>
    <div className={classes.group}>
      <item className={classes.item}> <a href="#footer">Stats </a> </item>
      <item className={classes.item}> <a href="#footer">Help</a></item>
      <item className={classes.item}> <a href="#footer">Meditate</a></item>
      <item className={classes.item}> <a href="#footer">Contact Us</a></item>
    </div>
      
  </header> 
  );
};

export default HeaderBlock;
