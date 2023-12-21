import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../Pages/Home';
import Aboutus from '../Pages/Aboutus';
import Career from '../Pages/Career';
import Blog from '../Pages/Blog';
import Contactus from '../Pages/Contactus';
import Mumbai from '../Pages/location/Mumbai';
import Allproperties from '../Pages/Properties/Allproperties';
import Footer from '../Pages/footer';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Properties/Allproperties" element={<Allproperties />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="location/Mumbai" element={<Mumbai />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;