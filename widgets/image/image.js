import React from 'react';
import { Widget } from 'kitto';

import './image.scss';

const placeholder = '/assets/images/placeholder.png';

Widget.mount(class Image extends Widget {
  imageStyle() {
    const { image, contain } = this.props;
    const style = { backgroundImage: `url(${this.props.image || placeholder})` };
    if (image) {
      style.backgroundImage = `url(${image})`;
      if (contain === 'true') {
        style.backgroundSize = 'contain';
        style.backgroundRepeat = 'no-repeat';
      }
    }
    return style;
  }

  render() {
    return <div style={this.imageStyle()} className={this.props.className} />;
  }
});
