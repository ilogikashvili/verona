import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title }) => (
  <article className="product-card">
    <img className="product-card-image" src={image} alt={title} />
    <div className="product-card-title">{title}</div>
  </article>
);

export default ProductCard;
