import React, { useState, useEffect } from 'react';

type DateTime = {
  time: string;
  date: string;
};

const Clock = () => {
  const padSingleDigit = (i: number) => i < 10 ? `0${i}` : i;

  const currentDateTime = (): DateTime => {
    const today = new Date();
    const h = today.getHours();
    const m = padSingleDigit(today.getMinutes());
    const s = padSingleDigit(today.getSeconds());

    return {
      time: `${h}:${m}:${s}`,
      date: today.toDateString()
    };
  };

  const [dateTime, updateDateTime] = useState(currentDateTime());

  useEffect(() => {
    setInterval(() => updateDateTime(currentDateTime()), 500);
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="clock-widget card orange z-depth-0">
      <h4 className="center-align"><b>{dateTime.date}</b></h4>
      <h5 className="center-align">{dateTime.time}</h5>
    </div>
  );
};

export default Clock;
