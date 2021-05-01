import React from "react";
import { Col, Row } from "antd";
import help from  '../../Assets/help.svg'
import classes from '../../Containers/Home/Home.module.css'

const Banner = () => {
  return (
    <Row justify="center" >
      <Col sm={16} xs={20}>
        <div className={classes.introCard}>
          <img alt="Banner" src={help} className={classes.homeIcons} />
          <p>We are helping connect the <span><b>donors</b></span> with the <span><b>recipients</b></span> during this tough COVID pandemic times</p>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
