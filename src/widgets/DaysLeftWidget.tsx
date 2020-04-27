import React, { useState, useEffect } from 'react';
import { differenceInCalendarDays } from 'date-fns';

interface DaysLeftProps {
  date: Date;
}

const DaysLeft = (props: DaysLeftProps) => {
  const { date } = props;

  const [days, updateDays] = useState(differenceInCalendarDays(new Date(), date));

  useEffect(() => {
    setInterval(() => updateDays(differenceInCalendarDays(new Date(), date)), 60 * 60 * 1000); // update every hour
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="days-left-widget card orange">
      <div className="num-days">{days}</div>
      <div className="text">TO GO</div>
      <div className="strong-container">
        <span className="strong" role="img" aria-label="strong">💪</span>
      </div>
    </div>
  );
};

export default DaysLeft;
