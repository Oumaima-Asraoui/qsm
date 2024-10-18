import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Quiz from './components/Quiz';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quiz/:module" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
