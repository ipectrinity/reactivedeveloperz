import { Col, Row } from 'antd'
import React from 'react'
import distance from '../../Assets/distance.png'
import Home from '../../Assets/Home.png'
import hygiene from '../../Assets/hygiene.png'
import Mask from '../../Assets/Mask.png'
import classes from './InfoCard.module.css'

export default function Preventions() {
    return (
        <>
        <Row  gutter={[32, 32]} justify='center'>
        <Col className={classes.SymptompsIcon} lg={9} md={17} sm={17} xs={22}>
               <h1>How To Prevent Yourself From Getting Covid</h1>
            </Col>
        </Row>
        <Row justify='center'>
            
            <Col className={classes.SymptompsIcon} lg={2} md={4} sm={4} xs={10}>
                <img src={distance} />
            </Col>
            <Col className={classes.SymptompsIcon} lg={2} md={4} sm={4} xs={10}>
                <img src={Mask} />
            </Col>
            <Col className={classes.SymptompsIcon} lg={2} md={4} sm={4} xs={10}>
                <img src={hygiene} />
            </Col>
            <Col className={classes.SymptompsIcon} lg={2} md={4} sm={4} xs={10}>

                <img src={Home} />
            </Col>
        </Row>
        </>
    )
}
