// BHKFilter.js
import React from 'react';
import Dropdown from 'react-dropdown-select';

const BHKFilter = ({ selectedBHK, onBHKChange }) => {
  const bhkOptions = [
    { value: "1 BHK", label: "1 BHK" },
    { value: "2 BHK", label: "2 BHK" },
    { value: "3 BHK", label: "3 BHK" },
    { value: "4 BHK", label: "4 BHK" },
  ];

  const customRenderer = ({ item, methods }) => (
    <div className='d-flex'>
      <input
        type="checkbox"
        id={item.value}
        checked={methods.isSelected(item)}
        onChange={() => methods.addItem(item)}
      />
      <label htmlFor={item.value}>{item.label}</label>
    </div>
  );

  return (
    <div className='bhks'>
      <Dropdown
        options={bhkOptions}
        values={Array.isArray(selectedBHK) ? selectedBHK : []} // Ensure selectedBHK is an array
        onChange={(values) => onBHKChange(values.map((value) => value.value))}
        multi
        placeholder="Select BHK"
        itemRenderer={customRenderer}
        keepSelectedInList={false} // Set this prop to false
      />
    </div>
  );
};


export default BHKFilter;