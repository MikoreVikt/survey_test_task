import { createSlice } from '@reduxjs/toolkit';
import { fetchMyAnswers, addFirstAnswer, addSecondAnswer } from './operations';

const initialState = {
  answers: [],
  firstAnswerStatus: false,
  secondAnswerStatus: false,
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
      .addCase(fetchMyAnswers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.answers = payload.answers;
        state.firstAnswerStatus = payload.status1;
        state.secondAnswerStatus = payload.status2;
      })
      .addCase(fetchMyAnswers.rejected, handleRejected)
      .addCase(addFirstAnswer.pending, handlePending)
      .addCase(addFirstAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.firstAnswerStatus = true;
        state.answers.push(payload);
      })
      .addCase(addFirstAnswer.rejected, handleRejected)
      .addCase(addSecondAnswer.pending, handlePending)
      .addCase(addSecondAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.secondAnswerStatus = true;
        state.answers.push(payload);
      })
      .addCase(addSecondAnswer.rejected, handleRejected);
  },
});

export const surveysReducer = surveysSlice.reducer;
