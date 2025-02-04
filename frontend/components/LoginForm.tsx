import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log('NEXT_PUBLIC_GOOGLE_CLIENT_ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  }, []);

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
    } catch (err) {
      setError('Invalid username or password');
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
    } catch (err) {
      setError('Error during signup');
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
    } catch (err) {
      setError('Error during Google signup');
    }
  };

  const handleGoogleFailure = (error: any) => {
    console.error('Google Sign-In error:', error);
    setError('Google Sign-In failed');
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Signup'}</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {isLogin ? 'Login' : 'Signup'}
            </button>
          </form>
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
            />
          </div>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;