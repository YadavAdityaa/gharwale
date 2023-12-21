// Defaulthome.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Defaulthome = ({ filteredData, handleViewMoreClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === "right"
        ? currentIndex + 1
        : direction === "left"
        ? currentIndex - 1
        : currentIndex;

    setCurrentIndex(
      newIndex >= 0 && newIndex < filteredData.length ? newIndex : currentIndex
    );
  };

  return (
    <>
      <div className="card-container">
        <div
          className="arrow arrow-left"
          onClick={() => handleArrowClick("left")}
        >
          &#8249;
        </div>
        <div
          className="arrow arrow-right"
          onClick={() => handleArrowClick("right")}
        >
          &#8250;
        </div>
        <div
          className="all-cards pb-3"
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          {filteredData.map((flat) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              key={flat.id}
            >
              <div className="card pb-2">
                <div className="card-img">
                  <img src={flat.Image} alt="" className="img-fluid" />
                </div>
                <h3>
                  {/* <a href="service-details.html" className="stretched-link"></a> */}
                  {flat.project}
                </h3>
                <span>{flat.name}</span>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>{flat.subLocation}</li>
                      <li>
                        {flat.size} &nbsp;{flat.size1}
                      </li>
                      <li>
                        <Link
                          to={`/Projects/${flat.name}/${flat.project}`}
                          onClick={handleViewMoreClick}
                          className="btn btn-primary"
                        >
                          &nbsp;View More&nbsp;
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li> {flat.describe}</li>
                      <li>{flat.area}</li>
                      <li>
                        <Link to="/EnquireForm" className="btn btn-primary">
                          Enquire Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            // <!-- End Card Item -->

            // <div className=" col-lg-4 col-md-4 col-sm-4 mb-2" key={flat.id}>
            //   <div className=" card p-4">
            //     <div className="pic">
            //       <img
            //         className="card-img-top img-fluid"
            //         src={flat.Image}
            //         alt="flat images"
            //       />
            //     </div>
            //     <div className="col card-author">
            //       <div>
            //         <h2 className="subtitle">
            //           {flat.project}
            //         </h2>
            //           <span className="dev-name">By {flat.name}</span>
            //       </div>
            //       <div className="col">
            //         <div className="container-fluid">
            //           <ul className="list-group mx-auto">
            //             <li>
            //               <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle" d-flex="true"></span>
            //               {flat.subLocation}
            //             </li>
            //             <li>
            //               <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle" d-flex="true"></span>
            //               {flat.size} &nbsp; {flat.size1}
            //             </li>
            //           </ul>
            //         </div>
            //       </div>
            //       <div className="col">
            //         <div className="container-fluid">
            //           <ul className="list-group mx-auto">
            //             <li>
            //               <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle" d-flex="true"></span>
            //               {flat.describe}
            //             </li>
            //             <li>
            //               <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle" d-flex="true"></span>
            //               {flat.area}
            //             </li>
            //             <li>
            //               <span className="pricing">{flat.price}</span>
            //               {flat.priceRange === "lakh" ? (
            //                 <span> lakhs</span>
            //               ) : (
            //                 <span> crores</span>
            //               )}
            //             </li>
            //           </ul>
            //         </div>
            //         <div className="row">

            //           <div className="col-lg-6 card-button">
            //           <Link
            //               to={`/Projects/${flat.name}/${flat.project}`}
            //               onClick={handleViewMoreClick}
            //               className="btn btn-primary"
            //             >
            //               &nbsp;View More&nbsp;
            //             </Link>
            //             </div>
            //             <div className="col-6 card-button">
            //             <Link to="/EnquireForm" className="btn btn-primary">
            //               Enquire Now
            //             </Link>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Defaulthome;
