import React from "react";
import { Col, Row, Button } from "antd";
import classes from "../../Containers/Home/Home.module.css";

const ActionSection = (props) => {
  const changeRoute = (route) => {
    props.history.push(route);
  };
  return (
    <Row gutter={[32, 32]} justify='center'>
      <Col lg={8} md={11} sm={11} xs={20}>
        <div className={classes.actionCard}>
          <p style={{ textAlign: "left" }}>
            {" "}
            Let us know what you’re looking for?
          </p>
          <Button
            onClick={() => changeRoute("register/recipient")}
            block
            className={classes.actionButton}>
            I am looking for Plasma Donors
          </Button>

          <Button
            onClick={() => changeRoute("/oxygenCylinders")}
            block
            className={classes.actionButton2}>
            Want oxygen cylinder?
          </Button>
        </div>
      </Col>
      <Col lg={8} md={11} sm={11} xs={20}>
        <div className={classes.actionCard}>
          <p style={{ textAlign: "left" }}> How can you help?</p>
          <Button block className={classes.actionButton}>
            I want to donate Plasma
          </Button>
          <Button
            onClick={() => changeRoute("/register/Oxygen-cylinders-supply")}
            block
            className={classes.actionButton2}>
            I can get Oxygen Cylinders
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ActionSection;
