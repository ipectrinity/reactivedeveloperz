import { Button } from "antd";
import React from "react";
import classes from "./InfoCard.module.css";
import WhatsApp from "../../Assets/WhatsApp.png";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";

export default function InfoCard({
  name,
  phone,
  type,
  location,
  verified,
  available,
  ago,
  isFree,
  charges,
  homeTest,
}) {
  return (
    <div className={classes.infoCard}>
      <div className={classes.details}>
        <div className={classes.nameAndPhone}>
          <p>{name}</p>
          <p style={{ color: "rgb(88,228,88)" }}>{phone}</p>
          {type === "lab" ? (
            <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
              Charge - &#x20B9;{charges}
            </p>
          ) : (
            <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
              {isFree}
            </p>
          )}
        </div>
        {type === "volunteer" ? (
          <a target='blank' href={`https://wa.me/91${phone}`}>
            <Button
              className={classes.Button}
              icon={
                <img
                  src={WhatsApp}
                  style={{ height: "20px", width: "20px", paddingRight: "2px" }}
                  alt='WhatsApp Logo'
                />
              }>
              WhatsApp
            </Button>
          </a>
        ) : (
          <a href={`tel:${phone.substring(0, 10)}`}>
            <Button className={classes.Button}>Call Now</Button>
          </a>
        )}
      </div>
      {type === "volunteer" ? (
        <div className={classes.available}>
          {available && <div className={classes.status}>Available Now</div>}
        </div>
      ) : (
        <div className={classes.status}>
          <div className={classes.location}>
            <p>{location}</p>
            <ion-icon name='location-outline'></ion-icon>
          </div>
          {(type === "food" || type === "ocl") && verified === "yes" ? (
            <Tag
              color='rgb(88,228,88)'
              style={{
                marginBottom: "10px",
                borderRadius: "10px",
                paddingBottom: "1px",
              }}
              icon={<ClockCircleOutlined />}>
              Verified {ago}
            </Tag>
          ) : (
            homeTest === "yes" && (
              <Tag
                color='rgb(88,228,88)'
                style={{
                  marginBottom: "10px",
                  borderRadius: "10px",
                  paddingBottom: "1px",
                }}
                icon={<CheckCircleOutlined />}>
                Home Test - {homeTest}
              </Tag>
            )
          )}
        </div>
      )}
    </div>
  );
}
