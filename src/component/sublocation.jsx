// SubLocationFilter.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubLocationFilter = ({ selectedLocation, onSubLocationChange }) => {
  const [selectedSubLocation, setSelectedSubLocation] = useState("all");
  const navigate = useNavigate(); // Hook to programmatically navigate
  const subLocationOptions = {
    Mumbai: ['Mulund', 'Nahur', 'Bhandup', 'Ghatkopar'],
    NaviMumbai: ['Airoli', 'Ghansoli', 'Rabale'],
    Thane: ['Ghodbunder', 'Kopri', 'Majiwada'],
    Pune: ['Shirur', 'Daund', 'Baramati'],
    // Add more sub-locations as needed
  };

  const handleSubLocationChange = (event) => {
    const newSubLocation = event.target.value;
    setSelectedSubLocation(newSubLocation);
    onSubLocationChange(newSubLocation);
    // Redirect to the result page with sub-location
    navigate(`/result/${selectedLocation.toLowerCase()}/${newSubLocation.toLowerCase()}`);
  };

  const availableSubLocations = subLocationOptions[selectedLocation] || [];
  
  return (
    <div className="filter">
      <label htmlFor="subLocation">Select Sub-Location:</label>
      <select
        id="subLocation"
        value={selectedSubLocation}
        onChange={handleSubLocationChange}
      >
        <option value="all">All</option>
        {availableSubLocations.map((subLocation) => (
          <option key={subLocation} value={subLocation}>{subLocation}</option>
        ))}
      </select>
    </div>
  );
};

export default SubLocationFilter;