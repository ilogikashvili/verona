import React from 'react';
import './StructureText.css';

const StructureText = ({ heading, description }) => (
  <div className="structure-text">
    <h2 className="structure-text-heading">{heading}</h2>
    <p className="structure-text-description">{description}</p>
  </div>
);

export default StructureText;
