// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Auth from './Auth/Auth';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
