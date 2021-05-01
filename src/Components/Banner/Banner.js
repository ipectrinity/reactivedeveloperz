import React from "react";
import { Col, Row } from "antd";
import help from "../../Assets/help.svg";
import Typewriter from "typewriter-effect";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <Row justify='center'>
      <Col sm={16} xs={20}>
        <div class={classes.staticSlider3}>
          <h1 class={classes.title}>
            <Typewriter
              options={{
                strings: [
                  "<b>CHEERS India!!<b>",
                  "India fights COVID-19 back.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;

// <img alt="Banner" src={help} className={classes.homeIcons} />
//           <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
