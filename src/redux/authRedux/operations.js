import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage, infoMessage } from 'services/notifications';

axios.defaults.baseURL = 'https://poll-test-task-backend.onrender.com';

// Utility to add JWT
const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// Utility to remove JWT
const clearToken = () => (axios.defaults.headers.common.Authorization = '');

/*
 * POST @ /api/auth/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/auth/register`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      errorMessage(
        ' This user already exists! Change your username or login. '
      );
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      errorMessage(' Wrong password or login! ');
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/logout');
      clearToken();
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;

    if (token === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(token);
      const { data } = await axios.post('/api/auth/current');

      return data.data;
    } catch (error) {
      infoMessage(' Please, Log In! ');
      return rejectWithValue(error.message);
    }
  }
);
