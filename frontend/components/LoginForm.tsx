import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

  useEffect(() => {
    console.log('NEXT_PUBLIC_GOOGLE_CLIENT_ID:', clientId);
  }, [clientId]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      const redirect = router.query.redirect || '/';
      router.push(redirect as string);
      toast.success('Login successful!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid username or password');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        username,
        email,
        phone,
        password,
        role: 'student',
      });
      localStorage.setItem('token', response.data.token);
      const redirect = router.query.redirect || '/';
      router.push(redirect as string);
      toast.success('Signup successful!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error during signup');
    }
  };

  const handleGoogleSuccess = async (response: any) => {
    try {
      console.log('Google Sign-In success:', response);
      const res = await axios.post('http://localhost:5000/api/users/google', {
        tokenId: response.credential,
      });
      localStorage.setItem('token', res.data.token);
      const redirect = router.query.redirect || '/';
      router.push(redirect as string);
      toast.success('Google Sign-In successful!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error during Google signup');
    }
  };

  const handleGoogleFailure = () => {
    toast.error('Google Sign-In failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 pt-24"> {/* Add padding-top to avoid overlap with navbar */}
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-white">{isLogin ? 'Login' : 'Signup'}</h2>
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
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
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 mt-4"
            />
          </div>
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
      </div>
      <ToastContainer />
    </GoogleOAuthProvider>
  );
};

export default LoginForm;