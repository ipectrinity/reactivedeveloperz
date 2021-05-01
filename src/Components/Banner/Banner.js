import React from "react";
import { Col, Row } from "antd";
import Typewriter from "typewriter-effect";
import classes from "./Banner.module.css";
import vaccination from "../../Assets/vaccination.svg";
import life from "../../Assets/healthcare.svg";
import volunteers from "../../Assets/volunteers.svg";
const Banner = () => {
  return (
    <Row justify='center'>
      <Col sm={22} xs={22} lg={16} md={22}>
        <div class={classes.staticSlider3}>
          <h1 class={classes.title}>
            <div className={classes.Typewriter}>
              INDIA fights back COVID-19.
            </div>
          </h1>

          <div className={classes.statsSection}>
            <div className={classes.imageStat}>
              <img src={life} alt='life icon' />
              <p>78155415</p>
            </div>
            <div className={classes.imageStat}>
              <img src={vaccination} alt='vaccine icon' />
              <p>78155415</p>
            </div>
            <div className={classes.imageStat}>
              <img src={volunteers} alt='volunteer icon' />
              <p>78155415</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
