import React from 'react';
import { Widget } from 'kitto';

import './score.scss';

Widget.mount(class Score extends Widget {
  static parseResponse(json) {
    json.replace('"', '\\"');
    return JSON.parse(json);
  }

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
      const { becca, jon } = Score.parseResponse(stdout);
      return (
        <table>
          <thead>
            <tr>
              <td className="becca">Becca</td>
              <td />
              <td className="jon">Jon</td>
            </tr>
          </thead>
          <tbody>
            <tr className="title">
              <td className="becca">{becca}</td>
              <td>:</td>
              <td className="jon">{jon}</td>
            </tr>
          </tbody>
        </table>
      );
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
