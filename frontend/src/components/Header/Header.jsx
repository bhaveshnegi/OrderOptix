import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'; // Import React Icons
import "./Header.css"


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handling search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handling search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Perform search logic here
  };

  return (
    <div className="header">
      {/* Left Section: Logo and App Name */}
      <div className="header-left">
        <Link to="/dashboard" className="logo">
          <h1>OrderOptix</h1>
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="header-center">
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <FaSearch /> {/* Using React Icon for search */}
          </button>
        </form>
      </div>
        

      {/* Right Section: User Profile and Notifications */}
      <div className="header-right">
        <div className="header-icons">
          {/* Notifications Icon */}
          <div className="header-icon">
            <FaBell /> {/* Using React Icon for bell */}
            <span className="notification-count">3</span>
          </div>

          {/* User Profile */}
          <div className="header-icon">
            <FaUserCircle /> {/* Using React Icon for user profile */}
            <div className="profile-dropdown">
              <button className="profile-btn">John Doe</button>
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/logout">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
