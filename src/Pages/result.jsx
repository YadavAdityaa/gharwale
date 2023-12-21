// ResultPage.js
import React from "react";
import { Link } from "react-router-dom";

const ResultPage = ({ filteredData, handleViewMoreClick }) => {
  console.log("Filtered Data in ResultPage:", filteredData);

  // const { subLocation } = useParams();
  return (
    <div className="card-container">
      <div className="row">
        <div className="col-8">
          {filteredData.map((flat) => (
            <div className="card mb-1" key={flat.id}>
              <div className="row p-4">
                <div className="col-md-12 col-lg-5">
                  <img
                    className="card-img-top img-fluid"
                    src={flat.Image}
                    alt="flat images"
                    onError={(e) => console.error(`Image failed to load from URL: ${flat.Image}`, e)}
                  />
                </div>
                <div className="col card-author">
                  <div className="row p-1">
                    <div>
                      <h2 className="subtitle">
                        {flat.project}
                        <span className="dev-name"> from {flat.name}</span>
                      </h2>
                    </div>
                    <div className="col">
                      <div className="container-fluid">
                        <ul className="list-group mx-auto">
                          <li>
                            <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle"></span>
                            {flat.subLocation}
                          </li>
                          <li>
                            <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle"></span>
                            {flat.size} &nbsp; {flat.size1}
                          </li>
                          <br />
                        </ul>
                      </div>
                      <div className="card-button position-relative start-51">
                        {/* <a href=" " className="btn btn-primary">
                          &nbsp;View More&nbsp;
                        </a> */}

                        <Link
                          to={`/Projects/${flat.name}/${flat.project}`}
                          onClick={handleViewMoreClick}
                          className="btn btn-primary"
                        >
                          &nbsp;View More&nbsp;
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="container-fluid">
                        <ul className="list-group mx-auto">
                          <li>
                            <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle"></span>
                            {flat.describe}
                          </li>
                          <li>
                            <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle"></span>
                            {flat.area}
                          </li>
                          <li>
                            <span className="pricing">{flat.price}</span>
                            {flat.priceRange === "lakh" ? (
                              <span> lakhs</span>
                            ) : (
                              <span> crores</span>
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="card-button">
                        <Link to="/EnquireForm" className="btn btn-primary">
                          Enquire Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>
            </div>
          ))}
        </div>
        <div className="col-4 use-sticky-container">
        <div className="use-sticky"><img src="/assets/sec.jpg" className="rounded sec" alt="..." /></div>
      </div>
      </div>
    </div>
  );
};

export default ResultPage;
