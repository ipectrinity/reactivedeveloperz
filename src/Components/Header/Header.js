import React from "react";
import classes from "./Header.module.css"

import logo from "../../Assets/help.svg"
import { Link } from "react-router-dom";

const HeaderBlock = () => {
  return (
  <header className={classes.header}>
    <div style={{display:'flex',alignItems:'center'}}>
      <img className={classes.logo} src={logo} alt="logo"/>
      <div className={classes.title}>Covid<span className={classes.subtitle}>R</span>elief</div>
    </div>
    <div className={classes.group}>
    <a href="#services"  className={classes.item}><item> Services</item></a>
    <a href="#symptoms"  className={classes.item}><item>Covid-19</item></a>
    <Link to="/cure"  className={classes.item}><item>Treatment</item></Link>
    <a href="#footer"  className={classes.item}><item>Contact Us</item></a>
    </div>
      
  </header> 
  );
};

export default HeaderBlock;
