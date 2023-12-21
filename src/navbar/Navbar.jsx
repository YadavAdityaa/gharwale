import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
       <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">
        <i className="fa-brands fa-google" style={{ color: "#005eff" }}></i>
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active mx-4">
            <Link to="/" className="nav-link">
              Home{" "}
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=" "
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Properties
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Allproperties
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Residential Properties
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Commercial Properties
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Ready To Move Projects
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Under Construction Project
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Villa
                </Link>
              </li>
              <li>
                <Link to="/properties/Allproperties" className="nav-link">
                  Plot
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=" "
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Locations
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Thane
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Dombivli
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Western
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Navi Mumbai
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Palava
                </Link>
              </li>
              <li>
                <Link to="Location/Mumbai" className="nav-link">
                  Pune
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item mx-4">
            <Link to="/Aboutus" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link to="/Career" className="nav-link">
              Career
            </Link>
          </li>

          <li className="nav-item mx-4">
            <Link to="/Blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link to="/Contactus" className="nav-link">
              Contactus
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
