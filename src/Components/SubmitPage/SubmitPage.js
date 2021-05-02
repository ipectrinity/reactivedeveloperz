import { Button, Col, message, Row } from 'antd'
import React from 'react'
import classes from './SubmitPage.module.css'
import icon from "../../Assets/Congratulations1.svg"

const copytoClipboard=(text)=>{
    navigator.clipboard.writeText(text)
    message.success("Reference Id Copied")
}





export default function SubmitPage(props) {
    return (
        <Row justify="center">
            <Col style={{ backgroundColor: "white", padding: "20px", marginTop: "40px" }} md={6} sm={16} xs={18}>
                <div className={classes.title1}>
                    <h1>Congratulations</h1>
                </div>
                <br />
                <img src={icon} style={{ height: "130px", width: "100%" }} />
                <br /><br />
                <div className={classes.content}>
                    <h1>Take Screenshot or copy this Reference Id</h1>
                    <p onClick={() => copytoClipboard(props.match.params.docId)} style={{ color: "green", textAlign: "center", fontWeight: "bold", cursor: "pointer" }}>{props.match.params.docId}</p>
                    
                    <h1>We have registered you successfully</h1>
                    <h2>We Will Reach Out To You As Per Required</h2>
                </div>
                <br /><br />
                <Button onClick={() => props.history.push("/")} block className={classes.actionButton}>
                    Go to Homescreen
                </Button>
            </Col>
        </Row>
    )
}
