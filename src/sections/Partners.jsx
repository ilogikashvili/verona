import React from 'react';
import './Partners.css';

const partnerLogos = [
  {
    src: 'https://via.placeholder.com/260x72/FFFFFF/000000?text=Partner+1',
    alt: 'Partner 1',
  },
  {
    src: 'https://via.placeholder.com/240x72/FFFFFF/000000?text=Partner+2',
    alt: 'Partner 2',
  },
  {
    src: 'https://via.placeholder.com/220x72/FFFFFF/000000?text=Partner+3',
    alt: 'Partner 3',
  },
  {
    src: 'https://via.placeholder.com/280x72/FFFFFF/000000?text=Partner+4',
    alt: 'Partner 4',
  },
];

const Partners = () => (
  <section className="partners-section">
    <div className="partners-content">
      {partnerLogos.map((logo, index) => (
        <div key={index} className="partner-logo">
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default Partners;
