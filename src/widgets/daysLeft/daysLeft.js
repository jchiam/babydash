import React from 'react';
import { Widget } from 'kitto';
import moment from 'moment';

import './daysLeft.scss';

Widget.mount(class DaysLeft extends Widget {
  constructor(props) {
    super(props);

    this.state = { days: moment(this.props.date).diff(moment(), 'day') };
    setInterval(this.update.bind(this), 60 * 60 * 1000);
  }

  update() {
    this.setState({ days: moment(this.props.date).diff(moment(), 'day') });
  }

  render() {
    const { days } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <div className="num-days">{days}</div>
        <div className="text">TO GO</div>
        <div className="strong-container">
          <span className="strong" role="img" aria-label="strong">💪</span>
        </div>
      </div>
    );
  }
});
