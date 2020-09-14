import React from 'react';
import logo from "../Images/logo.png";
import "./style.css";


const MobileNav = ({onNavClick, NavOpen}) => {
    const menuBtnClassName = "MobileNav-menuBtn" +  (NavOpen ? " MobileNav-menuBtn--active" : ""); 
    const menuClassName = "MobileNav-menu" +  (NavOpen ? " MobileNav-menu--active" : ""); 

    return ( <nav className="MobileNav">
    <div className="MobileNav-root"> 
        <div className="MobileNav-logo p-2"> <img src={logo}/></div>
        <div className={menuBtnClassName}>
            <button onClick={onNavClick}><span/>
            <span/>
            <span/></button>
        </div>
    </div> 
    <div className={menuClassName}>
    <ul className="navbar-nav  ml-auto">
        <li className="nav-item active">
          <a className="nav-link navbar_link active" href="#">{'>'}  Home </a>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbar_link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {'>'} About Us
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">{'>'} Our Company</a>
            <a className="dropdown-item" href="#">{'>'} Board of Directors</a>
            <a className="dropdown-item" href="#">{'>'} Management Team</a>
            <a className="dropdown-item" href="#">{'>'} Our Partners</a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbar_link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {'>'} Products & Services
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">{'>'} Our Products</a>
            <a className="dropdown-item" href="#">{'>'} Our Services</a>
           
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">{'>'} Careers</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {'>'} News & Events
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">{'>'} News</a>
            <a className="dropdown-item" href="#">{'>'} Events</a>

          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">{'>'} Contact Us</a>
        </li>
      </ul>

    </div>
    </nav>);
}
 
export default MobileNav;