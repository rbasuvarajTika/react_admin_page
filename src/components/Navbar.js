import React from 'react'
import './Navbar.css';


    const Navbar = () => {
      return (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fax List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Rx Tracker List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Case Details
              </a>
            </li>
          </ul>
        </nav>
      );
    };
    
    export default Navbar;
    
