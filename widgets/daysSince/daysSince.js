import React from 'react';
import { Widget } from 'kitto';
import moment from 'moment';

import './daysSince.scss';

Widget.mount(class DaysSince extends Widget {
  constructor(props) {
    super(props);

    this.state = { days: moment().diff(moment(this.props.date), 'day') };
    setInterval(this.update.bind(this), 60 * 60 * 1000);
  }

  update() {
    this.setState({ days: moment().diff(moment(this.props.date), 'day') });
  }

  render() {
    const { days } = this.state;
    const { className, date } = this.props;
    const dateMoment = moment(date);
    return (
      <div className={className}>
        <div className="container">
          <div className="num-days">{days}</div>
          <div className="heart-container">
            <span className="heart" role="img" aria-label="heart">❤️</span>
          </div>
          <div>{`${dateMoment.date()} - ${dateMoment.month() + 1} - ${dateMoment.year()}`}</div>
        </div>
      </div>
    );
  }
});
