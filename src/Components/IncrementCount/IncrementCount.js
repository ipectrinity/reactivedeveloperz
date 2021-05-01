import React, { useState, useEffect } from "react";

const data = {
  counts: [
    {
      id: "001",
      label: "A Really Big Number",
      number: "900000",
      duration: "2",
    },
    {
      id: "002",
      label: "Ice Cream Flavors",
      number: "5321",
      duration: "2",
    },
    {
      id: "003",
      label: "Customers Served",
      number: "100",
      duration: "2",
    },
    {
      id: "004",
      label: "Complaints",
      number: "0",
      duration: "2",
    },
  ],
};

const IncrementCount = () => {
  const [count, setCount] = useState("0");

  // useEffect(() => {
  //   let start = 0;
  //   // first three numbers from props
  //   const end = parseInt(number.substring(0,3))
  //   // if zero, return
  //   if (start === end) return;

  //   // find duration per increment
  //   let totalMilSecDur = parseInt(duration);
  //   let incrementTime = (totalMilSecDur / end) * 1000;

  //   // dependency array
  // }, [number, duration]);

  return <div></div>;
};

export default IncrementCount;
