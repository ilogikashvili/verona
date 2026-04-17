import React from 'react';
import './Images.css'; // Assuming you'll add styles here

const Image = ({ src, alt, className, ...props }) => {
  return (
    <img src={src} alt={alt} className={`image ${className || ''}`} {...props} />
  );
};

export default Image;