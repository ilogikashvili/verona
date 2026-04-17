import React, { useEffect, useRef, useState } from 'react';
import './Button.css';

// Reusable button component for the whole app.
const Button = ({
  children,
  onClick,
  onHover,
  variant = 'default',
  options = [],
  onSelect,
  placeholder = 'Select',
  selectedValue,
  groups,
  selectedValues,
  onMultiSelect,
  ...props
}) => {
  const handleMouseEnter = () => {
    if (onHover) onHover();
  };

  // ✅ EXISTING dropdown (unchanged)
  if (variant === 'dropdown') {
    return (
      <DropdownButton
        label={children || placeholder}
        options={options}
        onSelect={onSelect}
        selectedValue={selectedValue}
        {...props}
      />
    );
  }

  // ✅ NEW nested multi dropdown
  if (variant === 'multiDropdown') {
    return (
      <MultiDropdownButton
        label={children || placeholder}
        groups={groups}
        selectedValues={selectedValues}
        onMultiSelect={onMultiSelect}
        {...props}
      />
    );
  }

  return (
    <div className="button-container" onMouseEnter={handleMouseEnter}>
      <button className="button" onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};



// ========================
// SINGLE SELECT DROPDOWN
// ========================
const DropdownButton = ({ label, options, onSelect, selectedValue, ...props }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    if (onSelect) onSelect(option);
    setOpen(false);
  };

  return (
    <div className="button-container dropdown" ref={wrapperRef}>
      <button
        className={`button button-dropdown ${open ? 'open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        {...props}
      >
        <span className="button-label">{label}</span>
        <span className="button-caret">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="button-menu">
          {options.map((option) => (
            <CheckboxOptionButton
              key={option.value || option.label || option}
              option={option}
              checked={(option.value || option) === selectedValue}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};



// ========================
// REUSABLE OPTION
// ========================
const CheckboxOptionButton = ({ option, checked, onClick }) => (
  <button
    className="button-menu-item button-menu-item-checkbox"
    type="button"
    onClick={onClick}
  >
    <span className="button-menu-text">{option.label || option}</span>
    <input
      className="button-menu-checkbox"
      type="checkbox"
      readOnly
      checked={checked}
      aria-checked={checked}
    />
  </button>
);



// ========================
// NESTED MULTI DROPDOWN
// ========================
const MultiDropdownButton = ({
  label,
  groups = [],
  selectedValues = {},
  onMultiSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
        setOpenGroups({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="button-container dropdown multi-dropdown" ref={wrapperRef}>
      <button
        className={`button button-dropdown ${open ? 'open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span className="button-label">{label}</span>
        <span className="button-caret">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="button-menu">
          {groups.map((group) => (
            <div key={group.key} className="nested-group">

              {/* inner dropdown trigger */}
              <button
                className="button-menu-item nested-trigger"
                onClick={() => toggleGroup(group.key)}
                type="button"
              >
                <span>{group.name}</span>
                <span>{openGroups[group.key] ? '▲' : '▼'}</span>
              </button>

              {/* inner dropdown content */}
              {openGroups[group.key] && (
                <div className="nested-options">
                  {group.options.map((option) => {
                    const checked = selectedValues[group.key]?.some(
                      (o) => o.value === option.value
                    );

                    return (
                      <CheckboxOptionButton
                        key={option.value}
                        option={option}
                        checked={checked}
                        onClick={() => onMultiSelect(group.key, option)}
                      />
                    );
                  })}
                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Button;