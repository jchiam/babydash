import React from 'react';
import { Widget } from 'kitto';

import './clock.scss';

class Clock extends Widget {
  static padSingleDigit(i) {
    return i < 10 ? `0${i}` : i;
  }

  static dateTime() {
    const today = new Date();
    const h = today.getHours();
    const m = Clock.padSingleDigit(today.getMinutes());
    const s = Clock.padSingleDigit(today.getSeconds());

    return {
      time: `${h}:${m}:${s}`,
      date: today.toDateString()
    };
  }

  constructor(props) {
    super(props);

    this.state = Clock.dateTime();
    setInterval(this.update.bind(this), 500);
  }

  update() {
    this.setState(Clock.dateTime());
  }

  render() {
    return (
      <div className={this.props.className}>
        <h1 className="date">{this.state.date}</h1>
        <h2 className="time">{this.state.time}</h2>
      </div>
    );
  }
}

Widget.mount(Clock);
export default Clock;
