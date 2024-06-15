import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Collagepredictor from './components/collagePredictor';
import DataAnalysis from './pages/dataAnalysis';
import Home from './pages/Home';

const App = () => {
    return (
      <Router>
      <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/collagepredictor" element={<Collagepredictor/>} />
              {/* Add more routes as needed */}
              <Route path="/dataAnalysis" element={<DataAnalysis/>} />
          </Routes>
      </div>
  </Router>
    );
};

export default App;
