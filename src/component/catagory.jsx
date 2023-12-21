// CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => (
  
  <div className='d-flex'>
    {/* <label htmlFor="category">Category: </label> */}
    <select
      id="category"
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="all">All Price</option>
      <option value="above1cr">Above 1 Cr</option>
      <option value="between50to99">
        Between 50 Lakhs and 99.9 Lakhs
      </option>
      <option value="below50">Below 50 Lakhs</option>
    </select>
   
  </div>
);

export default CategoryFilter;