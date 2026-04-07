import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';

const API_URL = `${baseUrl}/api`;

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

// Leads API functions
export interface UpdateLeadStatusPayload {
  callingStatus?: string;
  leadType?: string;
  leadStatus?: string;
  // optional dates/remark for counsellor UI
  callingDate?: string | null;
  followUpDate?: string | null;
  remark?: string;
  city?: string;
  state?: string;
}

export const getLeadsByCounsellor = async (counsellorId: string) => {
  const response = await axios.get(`${API_URL}/leads/get-all-leads-by-counsellor/${counsellorId}`);
  return response.data;
};

export const updateLeadStatus = async (leadId: string, statusData: UpdateLeadStatusPayload) => {
  const response = await axios.patch(`${API_URL}/leads/${leadId}/update-status`, statusData);
  return response.data;
};

// Registered Students API functions
export const getRegisteredStudentsByCounsellor = async (counsellorId: string) => {
  const response = await axios.get(`${API_URL}/registered-students/get-all`);
  return response.data;
};