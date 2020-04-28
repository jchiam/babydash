import React, { useState, useEffect } from 'react';
import { lightFormat } from 'date-fns';

type DateTime = {
  time: string;
  date: string;
};

const Clock = () => {
  const currentDateTime = (): DateTime => {
    const today = new Date();
    return {
      time: lightFormat(today, 'hh:mm:ss a'),
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
