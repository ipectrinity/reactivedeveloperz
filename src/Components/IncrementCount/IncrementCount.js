import React, { useState, useEffect } from "react";

const IncrementCount = ({ number, duration, text }) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
    // dependency array
  }, [number, duration]);

  return (
    <div>
      {count}
      {text}
    </div>
  );
};

export default IncrementCount;
