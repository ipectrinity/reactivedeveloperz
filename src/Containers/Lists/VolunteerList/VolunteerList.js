import React, { useState, useEffect } from "react";
import InfoCard from "../../../Components/InfoCard/InfoCard";
import classes from "../../Forms/RegistrationForm.module.css";
import { Col, Row, Spin } from "antd";
import firebase from "../../../Firebase/firebaseconfig";
import "firebase/firestore";
import { LoadingOutlined } from "@ant-design/icons";
import { checkAvailability } from "../../../Utils";
import FormHeader from "../../../Components/FormHeader/FormHeader";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

var db = firebase.firestore();

export default function VolunteerList(props) {
  const [volunteerList, setVolunteerList] = useState([]);
  useEffect(() => {
    var volArr = [];
    db.collection("Volunteers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          volArr.push(doc.data());
        });
        setVolunteerList(checkAvailability(volArr));
        console.log(checkAvailability(volArr));
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className={classes.body}>
      <Row justify='center'>
        <Col lg={8} sm={16} xs={23}>
          <FormHeader
            title='List of Available Volunteers'
            onBackPress={() => props.history.push("/")}
          />
        </Col>
      </Row>
      <Row justify='center' gutter={[8, 8]}>
        {volunteerList.length !== 0 &&
          volunteerList.map((volunteer, index) => (
            <Col key={index} lg={7} md={8} sm={15} xs={24}>
              <InfoCard
                name={volunteer.name}
                phone={volunteer.whatsappNo}
                type='volunteer'
                available={volunteer.isAvailable}
              />
            </Col>
          ))}
        {!volunteerList.length && <Spin indicator={antIcon} />}
      </Row>
    </div>
  );
}
