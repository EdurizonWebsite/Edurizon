"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface University {
  _id: string;
  name: string;
  country: string;
  type: string;
}

const Navbar = () => {
  console.log('Rendering Navbar component');
  const [universities, setUniversities] = useState<University[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUniversities = async () => {
      const response = await axios.get('http://localhost:5000/api/universities/mbbs');
      setUniversities(response.data);
    };

    fetchUniversities();
  }, []);

  const handleUniversityClick = (id: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push(`/login?redirect=/university/${id}`);
    } else {
      router.push(`/university/${id}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
                  <div
                    key={university._id}
                    className="px-4 py-2 text-gray-800 cursor-pointer"
                    onClick={() => handleUniversityClick(university._id)}
                  >
                    {university.name} ({university.country})
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-800">No universities available</div>
              )}
            </div>
          )}
        </div>
        <div className="text-white text-lg font-bold">Edurizon</div>
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;