import React, { useState, useEffect } from 'react';
import { differenceInCalendarDays, getDate, getMonth, getYear } from 'date-fns';

interface DaysSinceProps {
  date: Date;
}

const DaysSince = (props: DaysSinceProps) => {
  const { date } = props;

  const [days, updateDays] = useState(differenceInCalendarDays(date, new Date()));

  useEffect(() => {
    setInterval(() => updateDays(differenceInCalendarDays(date, new Date())), 60 * 60 * 1000); // update every hour
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="days-since-widget card orange">
      <div className="num-days">{days}</div>
      <div className="heart-container">
        <span className="heart" role="img" aria-label="heart">❤️</span>
      </div>
      <div>{`${getDate(date)} - ${getMonth(date) + 1} - ${getYear(date)}`}</div>
    </div>
  );
};

export default DaysSince;
