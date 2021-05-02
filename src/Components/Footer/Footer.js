import React from "react";
import classes from "./Footer.module.css";
import logo from "../../Assets/help.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className={classes.footer}>
        <div className={classes.lFooter}>
          <div className={classes.head}>
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              alt='Covid Relief Logo'
            />
            <div style={{ marginLeft: "10px" }}>
              <h1>Covid Relief</h1>
              <p>
                Covid Relief is a one stop solution in this tough times..
              </p>
            </div>
          </div>
        </div>
        <ul className={classes.rFooter}>
          <li style={{ marginTop: "" }}>
            <h2>Services</h2>
            <ul className={classes.box}>
              <Link to='/volunteer'><li href=''>Contact Volunteer</li></Link>
              <Link to='/oxygenCylinders'><li href=''>Get Oxygen Cylinders</li></Link>
              <Link to='/food'><li href=''>Get Food</li></Link>
             
            </ul>
          </li>
          <li className={classes.features}>
            <h2>Registration</h2>
            <ul className={classes.box + classes.hBox}>
              <Link to={{ pathname: "/register/donor" }}><li href='#'>Donor</li></Link>
              <Link to={{ pathname: "/register/recipient" }}><li href='#'>Recipient</li></Link>
              <Link to={{ pathname: "/register/food-supply" }}><li href='#'>Food Supplier</li></Link>
              <Link to={{ pathname: "/register/Oxygen-cylinders-supply" }}><li href='#'>Oxygen Cylinders Supplier</li></Link>
            </ul>
          </li>
          <li>
            <h2>Developers</h2>
            <ul className={classes.box}>
              <div>
                <a target='_blank' href="https://www.linkedin.com/in/sourodeep-ghosh-roy-828861208/">Sourodeep Ghosh</a>
              </div>
              <div>
                <a target='_blank' href="https://www.linkedin.com/in/ritikgupta1982/">Ritik Gupta</a>
              </div>
              <div>
                <a target='_blank' href="https://www.linkedin.com/in/disha-bahal-20424a1aa/">Disha Bahal</a>
              </div>
              <div>
                <a target='_blank' href="https://www.linkedin.com/in/jaya-gaur-473ba4190/">Jaya Gaur</a>
              </div>



            </ul>
          </li>
        </ul>
        <div className={classes.bFooter}>
          <p>All Rights Reserved by &copy;Covid Relief</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;