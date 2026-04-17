import React from 'react';
import './Image.css';

const Image = ({ src, alt = '', className = '', ...props }) => (
  <img
    src={src}
    alt={alt}
    className={`ui-image ${className}`.trim()}
    {...props}
  />
);

export default Image;
