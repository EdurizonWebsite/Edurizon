import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/login`, { username, password });
  return response.data;
};

export const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const googleAuth = async (tokenId: string) => {
  const response = await axios.post(`${API_URL}/users/google`, { tokenId });
  return response.data;
};