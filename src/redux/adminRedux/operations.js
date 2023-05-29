import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'services/notifications';

export const fetchFirstPartOfResults = createAsyncThunk(
  'admin/getFirstPart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/admin/firstresult`);
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSecondPartOfResults = createAsyncThunk(
  'admin/getSecondPart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/admin/secondresult`);
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);
