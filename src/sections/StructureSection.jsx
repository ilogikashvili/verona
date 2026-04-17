import React from 'react';
import StructureText from '../components/ui/StructureText';
import './StructureSection.css';

const StructureSection = ({ heading = 'Structure', description = '' }) => (
  <section className="structure-section">
    <div className="structure-section-inner">
      <StructureText heading={heading} description={description} />
    </div>
  </section>
);

export default StructureSection;
