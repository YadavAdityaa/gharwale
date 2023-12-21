// LocationFilter.js
import React, { useState } from "react";
import SubLocationFilter from "./sublocation";
import { useNavigate } from "react-router-dom";

const LocationFilter = ({
  onLocationChange,
  onSubLocationChange,
  setSelectedSubLocation,
}) => {
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const locationOptions = [
    { value: "location", label: "Location" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "NaviMumbai", label: "NaviMumbai" },
    { value: "Thane", label: "Thane" },
    { value: "Pune", label: "Pune" },
  ];

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
    onLocationChange(newLocation);
    // Reset sub-location when location changes
    setSelectedSubLocation("all");

    // Update the URL based on the selected location
    navigate(`/${newLocation.toLowerCase()}`);
  };

  return (
    <div className="label-container">
      <div className="row">
        <div className="col-lg-6">
          <label htmlFor="location">Select Location:</label>
          <select
            id="location"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            {/* <option value="location" disabled>Location</option> */}
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-6">
          <SubLocationFilter
            selectedLocation={selectedLocation}
            onSubLocationChange={onSubLocationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationFilter;
