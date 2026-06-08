import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LeadData {
  email: string;
  source?: string;
}

export const apiService = {
  submitContact: async (data: ContactData) => {
    const response = await api.post('/contact', data);
    return response.data;
  },

  submitLead: async (data: LeadData) => {
    const response = await api.post('/lead', data);
    return response.data;
  },

  checkHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};
