import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Edurizon</h1>
        <p className="text-lg">Your gateway to the best universities around the world.</p>
      </div>
    </div>
  );
};

export default Home;