import React from 'react';
import { Widget } from 'kitto';

import './countdown.scss';

Widget.mount(class Countdown extends Widget {
  static diff(date1, date2) {
    const diff = {};

    // Convert both dates to milliseconds and get diff
    const diffMs = date2.getTime() - date1.getTime();

    diff.seconds = Math.round(diffMs / 1000);
    diff.minutes = Math.round(diff.seconds / 60);
    diff.hours = Math.round(diff.minutes / 60);
    diff.days = Math.round(diff.hours / 24);
    diff.weeks = Math.round(diff.days / 7);
    diff.years = date2.getYear() - date1.getYear();
    diff.months = date2.getMonth() - date1.getMonth() + diff.years * 12;

    return diff;
  }

  constructor(props) {
    super(props);

    const { day, month, year } = props;
    this.state = { diff: Countdown.diff(new Date(), new Date(`${year}-${month}-${day}`)) };
    setInterval(this.update.bind(this), 500);
  }

  update() {
    const { day, month, year } = this.props;
    this.setState({ diff: Countdown.diff(new Date(), new Date(`${year}-${month}-${day}`)) });
  }

  renderStats(stats) {
    const value = this.state.diff[stats];
    if (value === 0) {
      return null;
    }
    return (
      <div className="stats-container">
        <div className="value">{value.toLocaleString()}</div>
        <div className="descriptor">{value === 1 ? stats.substring(0, stats.length - 1) : stats}</div>
      </div>
    );
  }

  render() {
    const { className, title } = this.props;
    return (
      <div className={className}>
        {this.renderStats('years')}
        {this.renderStats('months')}
        {this.renderStats('weeks')}
        {this.renderStats('days')}
        {this.renderStats('minutes')}
        {this.renderStats('seconds')}
        <div className="title">{title}</div>
      </div>
    );
  }
});
