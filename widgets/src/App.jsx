import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
  {
    label: 'the color red',
    value: 'red',
  },
  {
    label: 'the color green',
    value: 'green',
  },
  {
    label: 'the color blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button
        aria-hidden="true"
        onClick={() => setShowDropdown(!showDropdown)}
        onKeyDown={() => setShowDropdown(!showDropdown)}
        type="submit"
      >
        Toggle
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
