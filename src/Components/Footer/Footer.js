import React from "react";
import classes from "./Footer.module.css";
import logo from "../../Assets/help.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.lFooter}>
          <div className={classes.head}>
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              alt='Covid Relief Logo'
            />
            <div>
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
              <li href='#'>Doctors</li>
              <li href='#'>OxygenCylinders</li>
              <li href='#'>Food</li>
            </ul>
          </li>
          <li className={classes.features}>
            <h2>Registration</h2>
            <ul className={classes.box + classes.hBox}>
              <li href='#'>Doctors</li>
              <Link to = {{pathname:"/registration"}}><li href='#'>Patients</li></Link>
              <li href='#'>Donors</li>
              <li href='#'>Recipient</li>
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