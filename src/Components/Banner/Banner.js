import React from "react";
import { Col, Row } from "antd";
import Typewriter from "typewriter-effect";
import classes from "./Banner.module.css";
import vaccination from "../../Assets/vaccination.svg";
import life from "../../Assets/healthcare.svg";
import volunteers from "../../Assets/volunteers.svg";
import IncrementCount from "../IncrementCount/IncrementCount";
const Banner = () => {
  return (
    <Row justify='center'>
      <Col sm={22} xs={22} lg={16} md={22}>
        <div class={classes.staticSlider3}>
          <h1 class={classes.title}>
            <div className={classes.Typewriter}>
              <Typewriter
                options={{
                  strings: ['CHEERS INDIA!!', 'India fights back COVID-19'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>
          </h1>

          <div className={classes.statsSection}>
            <div className={classes.imageStat}>
              <img src={life} alt='life icon' />
              <p>
                <IncrementCount number={"300000"} duration={"2"} />
              </p>
            </div>
            <div className={classes.imageStat}>
              <img src={vaccination} alt='vaccine icon' />
              <p>
                <IncrementCount number={"3640000"} duration={"2"} />
              </p>
            </div>
            <div className={classes.imageStat}>
              <img src={volunteers} alt='volunteer icon' />
              <p>
                <IncrementCount number={"500"} duration={"2"} />
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
