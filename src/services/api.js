import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = async (data) => {
  return await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
export const loginUser = async (data) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Invalid email or password');
  }

  return await response.json();

}
export const getExpenses = (token) =>
  api.get('/expenses', { headers: { Authorization: `Bearer ${token}` } });
export const createExpense = (data, token) =>
  api.post('/expenses', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateExpense = (id, data, token) =>
  api.put(`/expenses/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteExpense = (id, token) =>
  api.delete(`/expenses/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export default api;
