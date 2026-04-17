import React, { useState } from 'react';
import './ProductDisplayCarousel.css';

const ProductDisplayCarousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? count - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev >= count - 1 ? 0 : prev + 1));
  };

  return (
    <section className="product-display-carousel">
      <div className="product-display-carousel-window">
        <div
          className="product-display-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)`, width: `${count * 100}%` }}
        >
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="product-display-carousel-slide">
              <img src={src} alt={`Product view ${index + 1}`} draggable={false} />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              className="product-display-carousel-nav product-display-carousel-nav-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              {'\u2039'}
            </button>
            <button
              className="product-display-carousel-nav product-display-carousel-nav-next"
              onClick={goNext}
              aria-label="Next image"
            >
              {'\u203a'}
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDisplayCarousel;
