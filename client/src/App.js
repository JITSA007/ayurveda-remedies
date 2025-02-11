// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';
import DoshaAnalysis from './pages/DoshaAnalysis';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/dosha-analysis" element={<DoshaAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
