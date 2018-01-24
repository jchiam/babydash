import React from 'react';
import { Widget } from 'kitto';
import moment from 'moment';

import './countdown.scss';

Widget.mount(class Countdown extends Widget {
  constructor(props) {
    super(props);

    this.state = { now: moment() };
    setInterval(this.update.bind(this), 500);
  }

  update() {
    this.setState({ now: moment() });
  }

  renderStats(type) {
    const { now } = this.state;
    const { date } = this.props;
    const value = moment(date).diff(now, type);

    return (
      <div className="stats-container">
        <div className="value">{value.toLocaleString()}</div>
        <div className="descriptor">{value === 1 ? type : `${type}s`}</div>
      </div>
    );
  }

  render() {
    const { className, title } = this.props;
    return (
      <div className={className}>
        {this.renderStats('year')}
        {this.renderStats('month')}
        {this.renderStats('week')}
        {this.renderStats('day')}
        {this.renderStats('minute')}
        {this.renderStats('second')}
        <div className="title">{title}</div>
      </div>
    );
  }
});
