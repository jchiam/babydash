import React, { useState, useEffect } from 'react';
import { differenceInCalendarDays, format } from 'date-fns';
import classNames from 'classnames';

interface DaysSinceProps {
  className?: string;
  date: Date;
}

const DaysSince = (props: DaysSinceProps) => {
  const { className, date } = props;

  const [days, updateDays] = useState(0);

  useEffect(() => {
    updateDays(differenceInCalendarDays(new Date(), date));
    setInterval(() => {
      updateDays(differenceInCalendarDays(new Date(), date));
    }, 60 * 60 * 1000); // update every hour
  }, [date]);

  return (
    <div className={classNames({ 'days-since-widget card orange z-depth-0': true, [className || '']: true })}>
      <div className="num-days">{days || '-'}</div>
      <div className="heart-container">
        <span className="heart" role="img" aria-label="heart">❤️</span>
      </div>
      <div className="date">{format(date, 'dd-MMM-yyyy')}</div>
    </div>
  );
};

export default DaysSince;
