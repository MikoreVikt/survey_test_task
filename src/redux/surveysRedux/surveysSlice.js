import { createSlice } from '@reduxjs/toolkit';
import { addFirstAnswer, addSecondAnswer } from './operations';

const initialState = {
  answers: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const surveysSlice = createSlice({
  name: 'surveys',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(addFirstAnswer.pending, handlePending)
      .addCase(addFirstAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.answers.push(payload);
      })
      .addCase(addFirstAnswer.rejected, handleRejected)
      .addCase(addSecondAnswer.pending, handlePending)
      .addCase(addSecondAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.answers.push(payload);
      })
      .addCase(addSecondAnswer.rejected, handleRejected);
  },
});

export const surveysReducer = surveysSlice.reducer;
