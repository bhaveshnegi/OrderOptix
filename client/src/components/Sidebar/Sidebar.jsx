import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Sidebar.css"


// Sidebar component
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // For collapsing the sidebar
  const location = useLocation(); // Used to highlight the active link

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2>OrderOptix</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? '☰' : '×'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard" className={isActive('/dashboard')}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products" className={isActive('/products')}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/orders" className={isActive('/orders')}>
              Orders
            </Link>
          </li>
          <li>
            <Link to="/fleet" className={isActive('/fleet')}>
              Fleet Management
            </Link>
          </li>
          <li>
            <Link to="/crm" className={isActive('/crm')}>
              CRM
            </Link>
          </li>
          <li>
            <Link to="/settings" className={isActive('/settings')}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
