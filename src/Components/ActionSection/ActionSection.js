import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import classes from "../../Containers/Home/Home.module.css";
import plasma from "../../Assets/blood.svg"
import oxygen from "../../Assets/oxygen-tank.svg"
import food from "../../Assets/spoon-fork-lunch-bag-box.svg"
import lab from "../../Assets/flask.svg"
import volunteer from "../../Assets/volunteer.svg"
import Modal from "antd/lib/modal/Modal";



const ActionSection = (props) => {

  const changeRoute = (route) => {
    console.log("Hello")
    props.history.push(route);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Row id="services" justify='center'>
        <Col lg={8} md={11} sm={11} xs={20}>
          <div className={classes.actionCard}>
            <p className={classes.actionTitle} style={{ textAlign: "left" }}>
              {" "}
            What are you <span className={classes.special}>Looking</span> for ?
          </p>
            <Button
              onClick={() => changeRoute("register/recipient")}
              block
              className={classes.actionButton}>
              Looking for Plasma Donors
          </Button>
            <Button
              onClick={() => changeRoute("/oxygenCylinders")}
              block
              className={classes.actionButton2}>
              Looking for oxygen cylinder
          </Button>
            <Button
              onClick={() => changeRoute("/food")}
              block
              className={classes.actionButton2}>
              Looking for food delivery
          </Button>
            <Button
              onClick={() => changeRoute("/volunteer")}
              block
              className={classes.actionButton2}>
              Looking for volunteers
          </Button>
          </div>
        </Col>
        <Col lg={8} md={11} sm={11} xs={20}>
          <div className={classes.actionCard}>
            <p className={classes.actionTitle} style={{ textAlign: "left" }}> Come forward to <span className={classes.special}>Help!!</span></p>
            <div className={classes.iconBox}>

              <Col onClick={() => changeRoute("register/Donor")} style={{ backgroundColor: '#2F61F5' }} span={11} className={classes.selectedcheckBox1}>
                <label style={{ textAlign: 'center' }} for="fever">
                  <img className={classes.image} src={plasma} />
                  <div style={{ color: 'white' }} className={classes.text}> Plasma Donor </div>
                </label>
              </Col>
              <Col onClick={() => changeRoute("register/Oxygen-cylinders-supply")} span={11} className={classes.selectedcheckBox1}>
                <label style={{ textAlign: 'center' }} for="fever">
                  <img className={classes.image} src={oxygen} />
                  <div className={classes.text}>Provide Oxygen Cylinder </div>
                </label>
              </Col>
              <Col onClick={() => changeRoute("register/food-supply")} span={11} className={classes.selectedcheckBox1}>
                <label style={{ textAlign: 'center' }} for="fever">
                  <img className={classes.image} src={food} />
                  <div className={classes.text}> Food Delivery </div>
                </label>
              </Col>
              <Col onClick={showModal} span={11} className={classes.selectedcheckBox1}>
                <label style={{ textAlign: 'center' }} for="fever">
                  <img className={classes.image} src={volunteer} />
                  <div className={classes.text}> Volunteer </div>
                </label>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        title={null}
        className={classes.modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<ion-icon name="close-outline"></ion-icon>}>
        <div className={classes.title1}>
          <p>Thank you for Taking The Initiative</p>
        </div>
        <br /><br />
        <a href="tel:9871597556"><Button block className={classes.actionButton}>
          Please Contact at 9871597556
            </Button></a>

      </Modal>
    </>
  );
};

export default ActionSection;
