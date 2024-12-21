import React from 'react';

function Results2027() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">2027年宜蘭中小學帆船運動成績</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">名次</th>
              <th className="px-4 py-2">學校</th>
              <th className="px-4 py-2">選手姓名</th>
              <th className="px-4 py-2">成績</th>
              <th className="px-4 py-2">組別</th>
            </tr>
          </thead>
          <tbody>
            {/* 這裡可以放入2027年的成績資料 */}
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">範例國小</td>
              <td className="border px-4 py-2">張小美</td>
              <td className="border px-4 py-2">00:15:15</td>
              <td className="border px-4 py-2">國小組</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results2027;