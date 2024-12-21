import React from 'react';
import { results2025 } from '../data/results2025';
import ResultsTable from '../components/ResultsTable';

function Results2025() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">2025年宜蘭中小學帆船運動成績</h2>
      {Object.entries(results2025).map(([category, data]) => (
        <ResultsTable key={category} category={category} data={data} />
      ))}
    </div>
  );
}

export default Results2025;