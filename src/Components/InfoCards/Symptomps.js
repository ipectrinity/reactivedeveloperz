import { Col, Row } from 'antd'
import React from 'react'
import classes from './InfoCard.module.css'
import fever from '../../Assets/fever.png'
import lossofsenseoftaste from '../../Assets/lossofsenseoftaste.svg'
import cold from '../../Assets/cold.png'
import coughing from '../../Assets/coughing.png'


export default function Symptomps() {
    return (
        <Row gutter={[32, 32]} justify='center'>
            <Col lg={8} md={11} sm={11} xs={20}>
                <Row justify="center">
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={fever} />
                    </Col>
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={cold} />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={coughing} />
                    </Col>
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={lossofsenseoftaste} />
                    </Col>
                </Row>

            </Col>
            <Col lg={8} md={11} sm={11} xs={20}>
                <div className={classes.Card2}>
                    <h1>Symptoms</h1>
                    <p>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus</p>
                    <ul>
                        <li>Fever or chills</li>
                        <li>Cough</li>
                        <li>Shortness of breath or difficulty breathing</li>
                        <li>Fatigue</li>
                        <li>Muscle or body aches</li>
                        <li>Headache</li>
                        <li>New loss of taste or smell</li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}
