import React from 'react'
import { Col, Row } from 'antd'
import classes from './InfoCard.module.css'
import hot from '../../Assets/hot.svg'
import oximeter from '../../Assets/oximeter.png'
import vitamins from "../../Assets/vitamin.png"
import milkBox from '../../Assets/milk-box.png'

export default function Cure() {
    return (
        <Row gutter={[32, 32]} style={{flexDirection:'row-reverse'}} justify='center'>
            <Col lg={8} md={11} sm={11} xs={20}>
                <Row justify="center">
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={hot} />
                    </Col>
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={oximeter} />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={vitamins} />
                    </Col>
                    <Col className={classes.SymptompsIcon} span={10}>
                        <img src={milkBox} />
                    </Col>
                </Row>

            </Col>
            <Col lg={8} md={11} sm={11} xs={20}>
                <div className={classes.Card2}>
                    <h1>Cures</h1>
                    <p>We can fight with COVID-19 on our own.We have to do some basic thing in our daily life.Some of these basic things are mentioned below:</p>
                    <ul>
                        <li>Steam</li>
                        <li>Oximeter</li>
                        <li>Consume fiber</li>
                        <li>Vitamins</li>
                        <li>Turmeric Milk</li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}
