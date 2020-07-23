import React from 'react';
import logo from './Images/logo.png';

const NavBar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#"><img src={logo} alt="First slide" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">

      <ul className="navbar-nav  ml-auto">
        <li className="nav-item active">
          <a className="nav-link navbar_link active" href="#">Home </a>
        </li>


        <li className="nav-item">
          <a className="nav-link navbar_link" href="#">Link</a>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbar_link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About Us
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Our Company</a>
            <a className="dropdown-item" href="#">Board of Directors</a>
            <a className="dropdown-item" href="#">Management Team</a>
            <a className="dropdown-item" href="#">Our Partners</a>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Career</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            News & Events
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">News</a>
            <a className="dropdown-item" href="#">Events</a>

          </div>
        </li>

      </ul>

    </div>
  </nav>);
}

export default NavBar;