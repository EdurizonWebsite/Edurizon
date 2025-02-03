"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [universities, setUniversities] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      const response = await axios.get('http://localhost:5000/api/universities/mbbs');
      setUniversities(response.data);
    };

    fetchUniversities();
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Edurizon</div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white bg-gray-700 px-4 py-2 rounded"
          >
            MBBS
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg">
              {universities.length > 0 ? (
                universities.map((university) => (
                  <div key={university._id} className="px-4 py-2 text-gray-800">
                    {university.name} ({university.country})
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-800">No universities available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;