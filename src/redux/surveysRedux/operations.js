import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'services/notifications';

export const addFirstAnswer = createAsyncThunk(
  'surveys/addFirstAnswer',
  async (newFirstAnswer, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/user/firstpoll`, newFirstAnswer);
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

export const addSecondAnswer = createAsyncThunk(
  'surveys/addSecondAnswer',
  async (newSecondAnswer, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/user/secondpoll`,
        newSecondAnswer
      );
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/contacts`);
//       return data;
//     } catch (error) {
//       errorMessage(' Something wrong! Try again. ');
//       return rejectWithValue(error.message);
//     }
//   }
// );
