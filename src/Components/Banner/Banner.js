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
      <Col sm={24} xs={24} lg={24} md={24}>
        <div class={classes.staticSlider3}>
          <h1 class={classes.title}>
            <div className={classes.Typewriter}>
              <Typewriter
                options={{
                  strings: ["CHEERS INDIA!!", "India fights back COVID-19"],
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
              <p style={{ fontSize: "30px" }}>Recoveries per day</p>
              <p>
                <IncrementCount number={"300"} duration={"2"} text={"K"} />
              </p>
            </div>
            <div className={classes.imageStat}>
              <img src={vaccination} alt='vaccine icon' />
              <p style={{ fontSize: "30px" }}>Vaccination per day</p>
              <p>
                <IncrementCount number={"3640"} duration={"2"} text={"K"} />
              </p>
            </div>
            <div className={classes.imageStat}>
              <img src={volunteers} alt='volunteer icon' />
              <p style={{ fontSize: "30px" }}>Volunteers Helping</p>
              <p>
                <IncrementCount number={"500"} duration={"2"} text={""} />
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;

<Typewriter
  options={{
    strings: ["CHEERS INDIA!!", "India fights back COVID-19"],
    autoStart: true,
    loop: true,
    delay: 75,
  }}
/>;
