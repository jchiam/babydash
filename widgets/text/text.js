import React from 'react';
import { Widget } from 'kitto';

import './text.scss';

class Text extends Widget {
  render() {
    const { status } = this.state;
    const { className } = this.props;
    return (
      <div className={`${className} ${status || ''}`}>
        <h1 className="title">{this.state.title || this.props.title}</h1>
        <h3>{this.state.text || this.props.text}</h3>
        <p className="more-info">{this.state.moreinfo || this.props.moreinfo}</p>
        <p className="updated-at">{this.updatedAt(this.state.updated_at)}</p>
      </div>
    );
  }
}

Widget.mount(Text);
export default Text;
