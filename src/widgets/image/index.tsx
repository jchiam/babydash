import React from 'react';

import './image.scss';

interface ImageProps {
  image: string;
}

const Image = (props: ImageProps) => (
  <div className="card">
    <div className="card-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
);

export default Image;
