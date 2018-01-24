import React from 'react';
import { Widget } from 'kitto';

import './image.scss';

const placeholder = '/assets/images/placeholder.png';

Widget.mount(class Image extends Widget {
  image() {
    return {
      backgroundImage: `url(${this.props.image || placeholder})`
    };
  }
  render() {
    return <div style={this.image()} className={this.props.className} />;
  }
});
