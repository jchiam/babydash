import React, { useState, useEffect } from 'react';
import { format, lightFormat } from 'date-fns';
import classNames from 'classnames';

interface ClockProps {
  className?: string;
}

type DateTime = {
  time: string;
  date: string;
};

const Clock = (props: ClockProps) => {
  const { className } = props;

  const currentDateTime = (): DateTime => {
    const today = new Date();
    return {
      time: lightFormat(today, 'hh:mm:ss a'),
      date: format(today, 'dd MMM yyyy iii')
    };
  };

  const [dateTime, updateDateTime] = useState(currentDateTime());

  useEffect(() => {
    setInterval(() => updateDateTime(currentDateTime()), 500);
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classNames({ 'clock-widget card orange z-depth-0': true, [className || '']: true })}>
      <h4 className="center-align"><b>{dateTime.date}</b></h4>
      <h5 className="center-align">{dateTime.time}</h5>
    </div>
  );
};

export default Clock;
