import React, { useState } from 'react';
import Image from '../components/ui/Image';
import Text from '../components/ui/Text';
import './ImageDisplay.css';

const ImageDisplay = ({ item = {}, onClick }) => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const { image, year, title, description } = item;

  const handleToggle = () => {
    setOverlayVisible((prev) => !prev);
    if (onClick) onClick(item);
  };

  return (
    <section className="image-display-section">
      <button
        type="button"
        className="image-display-card"
        onClick={handleToggle}
        aria-label={`Toggle overlay for ${title}`}
      >
        <Image src={image} alt={title} className="image-display-image" />

        <div className="image-display-year">
          <Text variant="year">{year}</Text>
        </div>

        <div className={`image-display-overlay ${overlayVisible ? 'visible' : 'hidden'}`}>
          <div className="image-display-overlay-inner">
            <Text variant="big" className="image-display-title">
              {title}
            </Text>
            <Text variant="small" className="image-display-description">
              {description}
            </Text>
          </div>
        </div>
      </button>
    </section>
  );
};

export default ImageDisplay;
