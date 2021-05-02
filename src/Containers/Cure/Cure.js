import { Col, Row } from 'antd'
import React from 'react'
import classes from './Cure.module.css'
import DeepBreathing from '../../Assets/DeepBreathing.webp'
import hot from '../../Assets/hot.svg'
import oximeter from '../../Assets/oximeter.png'
import vitamins from "../../Assets/vitamin.png"
import milkBox from '../../Assets/milk-box.png'

export default function Cure() {
    return (
        <>
            <br /><br />
            <br /><br />
            <Row gutter={[32, 32]} justify='center'>

                <Col className={classes.CureInfoContainer} lg={16} md={17} sm={17} xs={22}>
                    <h1 style={{ fontWeight: "900", textAlign:"center" }}>How To Fight <span style={{ color: "orangered" }}>Covid-19</span></h1>

                    <Row>
                        <Col className={classes.left} sm={8} xs={22} >
                            <img src={DeepBreathing} />
                        </Col>
                        <Col className={classes.right} sm={16} xs={22} >
                            <h2>Breathing </h2>
                            <p>Breathing exercises get oxygen deep into the lungs, which helps you clear out mucus and other fluids.
                            During recovery, breathing exercises work to strengthen the diaphragm, a major respiratory muscle located under the lungs. It can also help increase lung capacity, bringing much-needed oxygen into your bloodstream.
                            </p>
                            <ul>
                                <li>Bhujangasana,</li>
                                <li>pawan muktasana,</li>
                                <li>surya namaskar,</li>
                                <li>paschimottanasana </li>
                                <li>taadasana, should also be done to improve immunity. </li>

                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={classes.left} sm={8} xs={22} >
                            <img src={hot} />
                        </Col>
                        <Col className={classes.right} sm={16} xs={22} >
                            <h2>Steam </h2>
                            <p>Steam inhalation is one of the most widely used home remedies to soothe and open the nasal passages and get relief from the symptoms of a cold or sinus infection.
                            Also called steam therapy, it involves the inhalation of water vapor. The warm, moist air is thought to work by loosening the mucus in the nasal passages, throat, and lungs. This may relieve symptoms of inflamed, swollen blood vessels in your nasal passages.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={classes.left} sm={8} xs={22} >
                            <img src={oximeter} />
                        </Col>
                        <Col className={classes.right} sm={16} xs={22} >
                            <h2>Oximeter </h2>
                            <p>pulse oximeter measures blood oxygen saturation and heart rate by shining a light through the skin and detecting both the colour and movement of your blood cells. Blood cells with a good amount of oxygens are bright red while other are dark red. The pulse oximeter compares the number of bright red cells to dark red cells to calculate oxygen saturation as a percentage, he said. So, if the reading says 95 per cent, it means that 5 per cent of the blood cells have been depleted of oxygen. 
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={classes.left} sm={8} xs={22} >
                            <img src={vitamins} />
                        </Col>
                        <Col className={classes.right} sm={16} xs={22} >
                            <h2>Vitamins to fight covid </h2>
                            <ul>
                            <li>Vitamin D is a fat-soluble nutrient essential to the health and functioning of your immune system.Vitamin D enhances the pathogen-fighting effects of monocytes and macrophages — white blood cells that are important parts of your immune defense — and decreases inflammation, which helps promote immune response</li>
                            <li>Zinc is needed for immune cell development and communication and plays an important role in inflammatory response. Zinc also specifically protects tissue barriers in the body and help prevent foreign pathogens from entering</li>
                            <li>Vitamin C is perhaps the most popular supplement taken to protect against infection due to its important role in immune health.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={classes.left} sm={8} xs={22} >
                            <img src={milkBox} />
                        </Col>
                        <Col className={classes.right} sm={16} xs={22} >
                            <h2>Turmeric Milk </h2>
                            <p>It keeps your immune system healthy and strong.The ministry has advised recovered patients to boost their immunity by using AYUSH medicine such as Chyawanprash, Ayush Kwath, turmeric milk, Samshamani Vati, Giloy powder, Ashwagandha, amla fruit, and mulethi powder. You should also gargle with turmeric and salt.</p>
                        </Col>
                    </Row>
                </Col>


            </Row>
            <br /><br />
            <br /><br />
        </>
    )
}
