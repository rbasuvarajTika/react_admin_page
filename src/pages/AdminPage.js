import React from 'react'
import Navbar from '../components/Navbar'
import './AdminPage.css'; 
import  { useState } from 'react';

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Navbar/>
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Dropdown
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">All Users</a>
            <a href="#">Active Users</a>
            <a href="#">Deactivated Users</a>
          </div>
        )}
      </div>
      <button>Create New User</button>
      <button className='btn'>Report Fields</button>
      <form className="search-form" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <nav aria-label="Page navigation example" className="pagination-container">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </>
  );
};
  
export default AdminPage