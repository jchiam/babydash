import React from 'react';
import { Widget } from 'kitto';

import './record.scss';

Widget.mount(class Record extends Widget {
  imageStyle() {
    const { image, imagecontain } = this.props;
    const style = {};
    if (image) {
      style.backgroundImage = `url(${image})`;
      if (imagecontain === 'true') {
        style.backgroundSize = 'contain';
        style.backgroundRepeat = 'no-repeat';
      }
    }
    return style;
  }

  renderScores() {
    const { stdout } = this.state;
    if (stdout) {
      return <h1>{stdout}</h1>;
    }
    return null;
  }

  render() {
    const { className } = this.props;
    return (
      <div style={this.imageStyle()} className={className}>
        <div className="contents">
          {this.renderScores()}
          <p className="updated-at">{this.updatedAt(this.state.updated_at)}</p>
        </div>
      </div>
    );
  }
});
