import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, contributionUrl, memberUrl } from '../../utils/BaseUrl';

// Actions
const resetMemberAction = createAction('member/reset');

const addNewMemberAction = createAsyncThunk(
  'member/add',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${memberUrl}/add`, userData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Builder function
const memberSliceBuilder = () => {
  const initialState = {};

  const extraReducersBuilder = (builder) => {
    builder.addCase(addNewMemberAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addNewMemberAction.fulfilled, (state, action) => {
      state.loading = false;
      state.member = action.payload
    });
    builder.addCase(addNewMemberAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    });
    builder.addCase(resetMemberAction, (state, action) => {
      // Handle reset action
    });
  };

  return createSlice({
    name: 'member',
    initialState,
    extraReducers: extraReducersBuilder,
  });
};

export default memberSliceBuilder;
