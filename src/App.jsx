import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Results2025 from './pages/Results2025';
import Results2026 from './pages/Results2026';
import Results2027 from './pages/Results2027';
import Results2028 from './pages/Results2028';
import Results2029 from './pages/Results2029';
import Results2030 from './pages/Results2030';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Results2025 />} />
            <Route path="/2025" element={<Results2025 />} />
            <Route path="/2026" element={<Results2026 />} />
            <Route path="/2027" element={<Results2027 />} />
            <Route path="/2028" element={<Results2028 />} />
            <Route path="/2029" element={<Results2029 />} />
            <Route path="/2030" element={<Results2030 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;