import React, { useState } from "react";
import classes from "../RegistrationForm.module.css";
import BeforeForm from "./Before/BeforeForm";
import AfterForm from "./After/AfterForm";
import { Col, message, Row } from "antd";
import firebase from "../../../Firebase/firebaseconfig";
import "firebase/firestore";
import FormHeader from "../../../Components/FormHeader/FormHeader";


var db = firebase.firestore();

export default function PlasmaRecipientForm(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [covidPositive, setCovidPositive] = useState(false);
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false)

  // OnChangeHandler for "name", "mobileNumber"
  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "mobileNumber") {
      setMobileNumber(e.target.value);
    }
  };

  const dateHandler = (date, dateString) => {
    setDate(dateString);
  };

  const stepHandler = (val) => {
    if (checkForm1Status() === "Success") setStep(val);
  };

  const checkForm1Status = () => {
    if (name === "") return message.error("Name Required");
    if (mobileNumber === "") return message.error("Mobile Number Required");
    if (gender === "") return message.error("Gender Required");
    return "Success";
  };
  const submitHandler = () => {
    if (bloodGroup === "") return message.error("Blood Group Required");

    if (location === "") return message.error("Location Required");

    if (covidPositive === false)
      return message.error("Covid Positive Report Required");

    if (date === "") return message.error("Date Required");

    if (checked === false) return message.error("Checkbox empty");

    setLoading(true)
    db.collection("Recipients")
      .add({
        name: name,
        phone: mobileNumber,
        gender: gender,
        bloodGroup: bloodGroup,
        location: location,
        screeningDate: date,
        timestamp: new Date(),
      })
      .then((docRef) => {
        setLoading(false)
        props.history.push('/recipient-registered/' + docRef.id)
      })
      .catch((error) => {
        setLoading(false)
        message.error("Something went wrong")
      });
  };
  return (
    <>
      <div className={classes.body}>
        <Row justify="center" >
          <Col lg={8} sm={16} xs={23}>
            <FormHeader title="Register As A Recipient" onBackPress={() => props.history.push('/')} />
          </Col>

        </Row>
        <Row justify="center" >
          <Col className={classes.formBox} lg={8} sm={16} xs={23}>

            {step === 0 ? (
              <BeforeForm
                namePhoneHandler={onChangeHandler}
                onGenderChange={setGender}
                onLocationChange={setLocation}
                onStepHandler={stepHandler}
              />
            ) : (
              <AfterForm
                onBloodChange={setBloodGroup}
                onCovidPositiveChange={setCovidPositive}
                onDateChange={dateHandler}
                onCheckedHandler={setChecked}
                onSubmitHandler={submitHandler}
                loading={loading}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
