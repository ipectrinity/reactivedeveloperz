import React from "react";
import { Col, Row } from "antd";
import Typewriter from "typewriter-effect";
import classes from "./Banner.module.css";
import syringe from "../../Assets/syringe.svg";
import life from "../../Assets/healthcare.svg";

const Banner = () => {
  return (
    <Row justify='center'>
      <Col sm={16} xs={20}>
        <div class={classes.staticSlider3}>
          <h1 class={classes.title}>
            <div className={classes.Typewriter}>
              <Typewriter
                options={{
                  strings: ["CHEERS INDIA!!", "INDIA fights COVID-19 back."],
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
              <p>78155415</p>
            </div>
            <div className={classes.imageStat}>
              <img
                style={{ marginLeft: "50px" }}
                src={syringe}
                alt='vaccine icon'
              />
              <p>78155415</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;

// <img alt="Banner" src={help} className={classes.homeIcons} />
//           <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
