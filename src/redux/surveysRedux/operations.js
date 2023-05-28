import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'services/notifications';

export const fetchMyAnswers = createAsyncThunk(
  'surveys/fetchMyAnswers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/user/myanswers`);
      const status = await data.answers.map(obj => obj.status);
      const status1 = status[0] === true ? true : false;
      const status2 = status[1] === true ? true : false;
      const answers = data.answers;
      return {
        answers,
        status1,
        status2,
      };
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

export const addFirstAnswer = createAsyncThunk(
  'surveys/addFirstAnswer',
  async (newFirstAnswer, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/user/firstsurvey`,
        newFirstAnswer
      );
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
        `/api/user/secondsurvey`,
        newSecondAnswer
      );
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);
