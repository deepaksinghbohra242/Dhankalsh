import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, contributionUrl } from '../../utils/BaseUrl';
import {fetchUserAction} from './userSlices'

const resetContribution = createAction("contribution/reset");

export const addContributionAction = createAsyncThunk(
  'contribution/add',
  async (contData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${contributionUrl}/add`, contData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllContributionAction = createAsyncThunk(
  'contribution/fetchAll',
  async (year, { rejectWithValue, getState }) => {
    const community = getState().user.userAuth.communityName;
    try {
      const { data } = await axios.get(`${contributionUrl}/getall?year=${year}&community=${community}`);
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
        state.contribution = action.payload;
      })
      .addCase(addContributionAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllContributionAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllContributionAction.fulfilled, (state, action) => {
        state.loading = false;
        state.contributions = action.payload;
      })
      .addCase(fetchAllContributionAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contributionSlice.reducer;
