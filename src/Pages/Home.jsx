// Home.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";
import "../css/App.css";
import FlatApi from "../api/FlatApi";
import CategoryFilter from "../component/catagory";
import BHKFilter from "../component/bhk";
import LocationFilter from "../component/location";
import ResultPage from "../Pages/result";
import Defaulthome from "../Pages/Defaulthome";
import Projects from "../Pages/Projects";
import EnquireForm from "../Pages/EnquireForm";
// import { Breadcrumb } from "react-bootstrap";
import Breadcrumbsec from "./breadcrumb";

const Home = () => {
  const [flatData] = useState(FlatApi);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");
  const [selectedSubLocation, setSelectedSubLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBHK, setSelectedBHK] = useState("all");
  const [viewMoreClicked, setViewMoreClicked] = useState(false);
  const navigate = useNavigate();
  const resultPageMatch = useMatch("/result/:location/:subLocation/*");

  // Function to handle sub-location change
  const handleSubLocationChange = (subLocation) => {
    setSelectedSubLocation(subLocation);
    setSelectedBHK("all");
    setSelectedCategory("all");

    // Redirect to the result page
    navigate(`/result/${subLocation}`);
  };
  // Function to handle location change
  const handleLocationChange = (newLocation) => {
    setSelectedLocation(newLocation);
    setSelectedSubLocation("all");

    // Update the URL based on the selected location
    navigate(`/${newLocation.toLowerCase()}`);
  };

  // Function to handle BHK change
  const handleBHKChange = (selectedOptions) => {
    setSelectedBHK(selectedOptions);
  };

  // Function to handle "View More" click
  const handleViewMoreClick = () => {
    setViewMoreClicked(true);
  };

  // useEffect to handle initial rendering and updates when flatData or selectedCategory changes
  useEffect(() => {
    // Function to handle filtering based on selected category, price range, and BHK
    const handleFilter = () => {
      let newFilteredData = flatData;

      switch (selectedCategory) {
        case "above1cr":
          newFilteredData = newFilteredData.filter(
            (flat) => flat.price >= 1 && flat.priceRange === "crore"
          );
          break;
        case "between50to99":
          newFilteredData = newFilteredData.filter(
            (flat) =>
              (flat.price >= 50 &&
                flat.price < 100 &&
                flat.priceRange === "lakh") ||
              (flat.price >= 1 && flat.priceRange === "crore" && flat.price < 1)
          );
          break;
        case "below50":
          newFilteredData = newFilteredData.filter(
            (flat) => flat.price < 50 && flat.priceRange === "lakh"
          );
          break;
        default:
          break;
      }

      if (selectedLocation !== "location") {
        newFilteredData = newFilteredData.filter(
          (flat) => flat.location === selectedLocation
        );
      }

      if (selectedSubLocation !== "all" && selectedSubLocation !== "location") {
        newFilteredData = newFilteredData.filter(
          (flat) => flat.subLocation === selectedSubLocation
        );
      }
      // Filter based on selected BHK options
      if (selectedBHK.length > 0 && selectedBHK.includes("all")) {
        // If 'All' is selected, do not apply BHK filter
      } else if (selectedBHK.length > 0) {
        newFilteredData = newFilteredData.filter(
          (flat) =>
            selectedBHK.includes(flat.size) || selectedBHK.includes(flat.size1)
        );
      }

      setFilteredData(newFilteredData);
      console.log("Filtered Data Length:", newFilteredData.length); // Add this line
    };

    handleFilter();
  }, [
    flatData,
    selectedCategory,
    selectedBHK,
    selectedLocation,
    selectedSubLocation,
  ]);

  return (
    <>
      <Breadcrumbsec />

      <div className="bg-light p-3 mx-5 filter-box">
        {/* <div className="col-lg-5 filter-element"> */}
        <LocationFilter
          onLocationChange={handleLocationChange}
          onSubLocationChange={handleSubLocationChange}
          setSelectedSubLocation={setSelectedSubLocation} // Pass the function as a prop
        />
        {/* </div> */}
      </div>
      {selectedLocation !== "location" &&
        selectedSubLocation !== "all" &&
        selectedSubLocation !== "location" && (
          <>
            {/* <div className="container col-lg-7 second-filter"> */}
            <div className="row">
              <div className="col-6 filter-element filt1">
                <BHKFilter
                  selectedBHK={selectedBHK}
                  onBHKChange={handleBHKChange}
                />
              </div>
              {/* Add more filters as needed */}
              <div className="col-6 filter-element ">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={(event) =>
                    setSelectedCategory(event.target.value)
                  }
                />
              </div>
            </div>
            {/* </div> */}
          </>
        )}

      <div className="container">
        <div className="main-body">
          {viewMoreClicked ? (
            <div className="full-screen">
              <EnquireForm />
            </div>
          ) : resultPageMatch ? (
            <ResultPage
              filteredData={filteredData}
              handleViewMoreClick={handleViewMoreClick}
            />
          ) : (
            <Defaulthome
              filteredData={filteredData}
              handleViewMoreClick={handleViewMoreClick}
            />
          )}
        </div>

        <Routes>
          <Route key="Defaulthome" path="./*" exact element={<Defaulthome />} />
          <Route path="/Projects/:name/:project" element={<Projects />} />
          {/* <Route
            path="/result/:location/:subLocation/*"
            element={
              <ResultPage
                filteredData={filteredData}
                handleViewMoreClick={handleViewMoreClick}
              />
            }
          /> */}
          {/* <Route path="*" element={<Home
          filteredData={filteredData}
          handleViewMoreClick={handleViewMoreClick}
         />} /> */}
        </Routes>
      </div>
    </>
  );
};
export default Home;
