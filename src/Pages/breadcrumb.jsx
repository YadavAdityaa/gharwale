import React from 'react'

function Breadcrumbsec() {
  return (
    <div className=" breadcrumb">
        <div className="row w-100 h-200">
          <div className="col-lg-5 crumb content-right">
            <img
              src="/assets/breadcrumb2.jpg"
              alt="breadcrumb"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6" style={{ padding: "20px" }}>
            <h1>Introducing Street View</h1>
            <p>Now Get Interactive 360° Experience of the Neighbourhood</p>
            <ul>
              <li>Realistic Surroundings</li>
              <li>Key Directions Highlights</li>
              <li>Open Space Area</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Breadcrumbsec