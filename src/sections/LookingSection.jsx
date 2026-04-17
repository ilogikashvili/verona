import React, { useState } from 'react';
import Button from '../components/ui/Button';
import './LookingSection.css';

const options = [
  { label: 'Lorem Ipsum', value: 'lorem' },
  { label: 'Dolor Sit', value: 'dolor' },
  { label: 'Amet Consectetur', value: 'amet' },
  { label: 'Adipiscing Elit', value: 'adipiscing' },
];

const LookingSection = ({ heading = 'Lorem Ipsum Dolor?', description = 'Consectetur adipiscing elit sed do eiusmod tempor.' }) => {
  const [filters, setFilters] = useState({
    type: [],
    price: [],
    location: [],
  });

  const handleSelect = (group, option) => {
    setFilters((prev) => {
      const exists = prev[group].some((o) => o.value === option.value);

      return {
        ...prev,
        [group]: exists
          ? prev[group].filter((o) => o.value !== option.value)
          : [...prev[group], option],
      };
    });
  };

  return (
    <section className="looking-section">
      <div className="left-looking-section">
        <h1 className="looking-title">{heading}</h1>
        <p className="looking-description">{description}</p>
      </div>
      <div className="right-looking-section">
        <Button
          className="filters-button"
          variant="multiDropdown"
          groups={[
            { name: 'Type', key: 'type', options },
            { name: 'Price', key: 'price', options }
          ]}
          selectedValues={filters}
          onMultiSelect={handleSelect}
        >
          Filters
        </Button>
      </div>
    </section>
  );
};

export default LookingSection;
