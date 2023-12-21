import React from 'react';
import { useParams } from 'react-router-dom';
import FlatApi from '../api/FlatApi';


function Projects() {
  const { name, project } = useParams();
  const flatData = FlatApi;
  const selectedFlat = flatData.find((flat) => flat.name === name  && flat.project === project);
  
  if (!selectedFlat) {
    return <div>Flat not found.</div>;
  }
  return (
    
    <div className='main-view'>

    <div className="container mt-5">
    {/* <!-- Header Section --> */}
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>{selectedFlat.project} by {selectedFlat.name}</h1>
      </div>
    </div>

    {/* <!-- Image Section --> */}
    <div className="row mt-4">
      <div className="col-md-6 offset-md-3 text-center">
        <img className="img-fluid" src={selectedFlat.Image} alt="Imagess Alt Text" onError={(e) => console.error(`Image failed to load from URL: ${selectedFlat.Image}`, e)} />
      </div>
    </div>

    {/* <!-- Paragraph Section --> */}
    <div className="row mt-4">
      <div className="col-md-8 offset-md-2">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aperiam delectus doloribus recusandae quaerat nostrum odit qui, expedita debitis ut.</p>
      </div>
    </div>
  </div>
 
  </div>
  );
}

export default Projects;