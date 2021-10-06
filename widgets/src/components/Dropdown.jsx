import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        aria-hidden="true"
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
        onKeyDown={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label"> Select a Color</label>
        <div
          aria-hidden="true"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  options: Array,
  selected: Object,
  onSelectedChange: PropTypes.func,
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.objectOf(PropTypes.string),
  onSelectedChange: PropTypes.func,
};

export default Dropdown;
