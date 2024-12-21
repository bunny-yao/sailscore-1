import React from 'react';

function ResultsTable({ category, data }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">名次</th>
              <th className="border px-4 py-2 text-left">帆號</th>
              <th className="border px-4 py-2 text-left">選手編號</th>
              <th className="border px-4 py-2 text-left">單位</th>
              <th className="border px-4 py-2 text-left">總分</th>
              <th className="border px-4 py-2 text-left">R1</th>
              <th className="border px-4 py-2 text-left">R2</th>
              <th className="border px-4 py-2 text-left">R3</th>
              <th className="border px-4 py-2 text-left">R4</th>
              <th className="border px-4 py-2 text-left">R5</th>
              <th className="border px-4 py-2 text-left">R6</th>
            </tr>
          </thead>
          <tbody>
            {data.results.map((result) => (
              <tr key={result.sailNo}>
                <td className="border px-4 py-2">{result.ranking}</td>
                <td className="border px-4 py-2">{result.sailNo}</td>
                <td className="border px-4 py-2">{result.sailor}</td>
                <td className="border px-4 py-2">{result.organization}</td>
                <td className="border px-4 py-2">{result.totalPoints}</td>
                {result.races.map((race, index) => (
                  <td key={index} className="border px-4 py-2">{race}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-gray-600">棄分場數: {data.discardRaces}</p>
    </div>
  );
}

export default ResultsTable;