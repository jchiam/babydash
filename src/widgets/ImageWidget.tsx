import React from 'react';

interface ImageProps {
  image: string;
}

const Image = (props: ImageProps) => (
  <div className="image-widget card orange">
    <div className="card-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
);

export default Image;
