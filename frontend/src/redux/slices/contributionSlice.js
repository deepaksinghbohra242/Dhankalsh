import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, contributionUrl } from '../../utils/BaseUrl';

export const addContributionAction = createAsyncThunk(
  'contribution/add',
  async (contData, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(`${baseUrl}${contributionUrl}`, contData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contributionSlice = createSlice({
  name: 'contribution',
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContributionAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContributionAction.fulfilled, (state, action) => {
        state.loading = false;
        state.contribution = action.payload
      })
      .addCase(addContributionAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contributionSlice.reducer;
