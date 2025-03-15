import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CounselorRegister = () => {
  const [credentials, setCredentials] = useState<{ username: string; password: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/counselor/register', {});
      setCredentials(response.data.credentials);
      toast.success('Registration successful! Please save your credentials.');
    } catch (err: any) {
      console.error('Registration error:', err);
      toast.error(err.response?.data?.message || 'Error during registration');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToDashboard = async () => {
    if (!credentials) return;
    
    setLoginLoading(true);
    try {
      // Login with the generated credentials
      const response = await axios.post('http://localhost:5001/api/counselor/login', {
        username: credentials.username,
        password: credentials.password
      });

      // Store the token
      localStorage.setItem('counselorToken', response.data.token);
      
      // Redirect to dashboard
      router.push('/counselor/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      toast.error('Failed to access dashboard. Please save your credentials and use the login page.');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Counselor Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Click below to generate your credentials
          </p>
        </div>

        {credentials ? (
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg border-2 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-4">Your Credentials</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Username:</p>
                  <p className="text-lg font-mono bg-gray-800 p-2 rounded select-all">{credentials.username}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Password:</p>
                  <p className="text-lg font-mono bg-gray-800 p-2 rounded select-all">{credentials.password}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-red-400 text-sm font-bold">
                    ⚠️ IMPORTANT: Save these credentials now!
                  </p>
                  <p className="text-gray-300 text-sm">
                    These credentials will not be shown again. You will need them to log in.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleGoToDashboard}
                disabled={loginLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-colors duration-200"
              >
                {loginLoading ? 'Redirecting...' : 'Go to Dashboard →'}
              </button>
              <p className="text-center text-sm text-gray-400">
                Make sure you've saved your credentials before continuing
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? 'Generating Credentials...' : 'Register as Counselor'}
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CounselorRegister; 