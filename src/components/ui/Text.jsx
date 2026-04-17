import React from 'react';
import './Text.css';

const Text = ({ variant = 'body', as, className = '', children, ...props }) => {
  const Component = as || (variant === 'big' ? 'h2' : variant === 'year' ? 'span' : 'p');

  return (
    <Component className={`ui-text ui-text-${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Text;
