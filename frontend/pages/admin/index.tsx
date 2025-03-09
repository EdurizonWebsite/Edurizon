import React, { useState,useEffect } from "react";


const VisibilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="white" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 4.5c-4.91 0-9 3.58-9 8s4.09 8 9 8 9-3.58 9-8-4.09-8-9-8zm0 14c-3.87 0-7-2.69-7-6s3.13-6 7-6 7 2.69 7 6-3.13 6-7 6zm0-10.5c-2.48 0-4.5 1.79-4.5 4s2.02 4 4.5 4 4.5-1.79 4.5-4-2.02-4-4.5-4zm0 6c-1.12 0-2-.74-2-2s.88-2 2-2 2 .74 2 2-.88 2-2 2z"/>
  </svg>
);

const VisibilityOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 6c4.41 0 8 3.59 8 8 0 1.23-.3 2.38-.81 3.41l1.51 1.51C21.68 17.37 22 16.21 22 15c0-5.52-4.48-10-10-10-1.21 0-2.37.32-3.41.81L10.59 6H12zm8 8c0-3.87-3.13-7-7-7-1.11 0-2.16.25-3.09.69l1.56 1.56c.5-.16 1.04-.25 1.53-.25 2.48 0 4.5 1.79 4.5 4 0 .49-.09 1.03-.25 1.53l1.56 1.56c.44-.93.69-1.98.69-3.09zm-8 5c-2.48 0-4.5-1.79-4.5-4 0-.49.09-1.03.25-1.53l-1.56-1.56C4.32 10.63 4 11.79 4 13c0 5.52 4.48 10 10 10 1.21 0 2.37-.32 3.41-.81l-1.51-1.51C13.62 19.7 12.77 20 12 20zm4.94 2.94L2.81 2.81 1.39 4.22l2.1 2.1C3.18 7.62 3 8.79 3 10c0 5.52 4.48 10 10 10 1.21 0 2.37-.32 3.41-.81l2.1 2.1 1.41-1.41z"/>
  </svg>
);


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
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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