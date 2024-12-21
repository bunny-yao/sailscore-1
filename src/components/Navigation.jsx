import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const years = [2025, 2026, 2027, 2028, 2029, 2030];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">宜蘭中小學帆船運動成績查詢系統</h1>
          <div className="flex space-x-4">
            {years.map(year => (
              <Link
                key={year}
                to={`/${year}`}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === `/${year}` || (location.pathname === '/' && year === 2025)
                    ? 'bg-blue-700'
                    : 'hover:bg-blue-500'
                }`}
              >
                {year}年
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;