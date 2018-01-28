import React from 'react';
import { Widget } from 'kitto';

import './score.scss';

Widget.mount(class Score extends Widget {
  static parseResponse(json) {
    json.replace('"', '\\"');
    return JSON.parse(json);
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
              <td className="jon">Jon</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} className="title">
                {`${becca} : ${jon}`}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
    return null;
  }

  render() {
    const { image, className } = this.props;
    return (
      <div style={image ? { backgroundImage: `url(${image})` } : null} className={className}>
        <div className="contents">
          {this.renderScores()}
          <p className="updated-at">{this.updatedAt(this.state.updated_at)}</p>
        </div>
      </div>
    );
  }
});
