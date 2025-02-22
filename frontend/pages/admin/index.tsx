import React, { useState,useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { isMobile } from 'react-device-detect';

const Admin = () => {

    const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check viewport width
    const checkViewportWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Check width on component mount
    checkViewportWidth();

    // Add resize event listener
    window.addEventListener('resize', checkViewportWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', checkViewportWidth);
  }, []);
  
    

    const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <> {isMobileView ? (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-2xl font-bold text-red-500 mb-4">
                  Desktop Access Required
                </h1>
                <p className="text-gray-700">
                  This page can only be accessed from a desktop device. Please switch to a device with a larger screen (≥768px).
                </p>
              </div>
            </div>
          ):(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
            Edurizon
          </h1>
  
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="username"
              className="mt-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
          </div>
  
          <div className="mb-4 relative">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-teal-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none pr-10"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>
  
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="keep-signed-in"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="keep-signed-in" className="ml-2 text-sm text-gray-700">
              Keep me signed in
            </label>
          </div>
  
          <button className="w-full bg-teal-500 text-white py-2 rounded-md font-semibold hover:bg-teal-600 transition">
            Login
          </button>
        </div>
      </div>)
}

      </>
    )
}

export default Admin;