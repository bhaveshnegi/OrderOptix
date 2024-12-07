import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed); // Toggle the sidebar state
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/fleet" element={<FleetManagement />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
