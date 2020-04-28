import React from 'react';
import classNames from 'classnames';

interface ImageProps {
  className?: string;
  image: string;
}

const Image = (props: ImageProps) => (
  <div className={classNames({ 'image-widget card orange z-depth-0': true, [props.className || '']: true })}>
    <div className="card-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
);

export default Image;
