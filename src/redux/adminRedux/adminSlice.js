import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFirstPartOfResults,
  fetchSecondPartOfResults,
} from './operations';

const initialState = {
  firstPartOfResults: [],
  secondPartOfResults: [],
  resIsLoading: true,
  error: null,
};

const handlePending = state => {
  state.resIsLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.resIsLoading = false;
  state.error = payload;
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchFirstPartOfResults.pending, handlePending)
      .addCase(fetchFirstPartOfResults.fulfilled, (state, { payload }) => {
        state.resIsLoading = false;
        state.error = null;
        state.firstPartOfResults = payload;
      })
      .addCase(fetchFirstPartOfResults.rejected, handleRejected)
      .addCase(fetchSecondPartOfResults.pending, handlePending)
      .addCase(fetchSecondPartOfResults.fulfilled, (state, { payload }) => {
        state.resIsLoading = false;
        state.error = null;
        state.secondPartOfResults = payload;
      })
      .addCase(fetchSecondPartOfResults.rejected, handleRejected);
  },
});

export const adminReducer = adminSlice.reducer;
