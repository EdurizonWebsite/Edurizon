import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CounselorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Logging in:', { username });
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password,
      });
      if (response.data.role !== 'counselor') {
        toast.error('Unauthorized access');
        return;
      }
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      router.push('/counselor/dashboard'); // Redirect to dashboard
    } catch (err) {
      console.error('Login error:', err.response?.data?.message || 'Invalid username or password');
      toast.error(err.response?.data?.message || 'Invalid username or password');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Registering:', { name, username, email, phone });
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        username,
        email,
        phone,
        password,
        role: 'counselor',
      });
      console.log('Registration successful:', response.data);
      localStorage.setItem('token', response.data.token);
      toast.success('Signup successful!');
      router.push('/counselor/dashboard'); // Redirect to dashboard
    } catch (err) {
      console.error('Registration error:', err.response?.data?.message || 'Error during signup');
      toast.error(err.response?.data?.message || 'Error during signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 pt-24">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">{isLogin ? 'Counselor Login' : 'Counselor Signup'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CounselorLogin;