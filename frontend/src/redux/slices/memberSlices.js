import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, contributionUrl, memberUrl } from '../../utils/BaseUrl';

// Actions
const resetMemberAction = createAction('member/reset');

export const addNewMemberAction = createAsyncThunk(
  'member/add',
  async(userData ,{rejectWithValue}) =>{
    try {
      const {data} = await axios.post(`${memberUrl}/add`, userData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
)

export const updateMemberAction = createAsyncThunk(
  'member/update',
  async (userData, { rejectWithValue }) => {
    const user = {
      userId : userData.id,
      fullName : userData.id,
      fatherName : userData.fatherName,
      motherName : userData.motherName,
      profession : userData.profession,
      address : userData.address,
      phoneNumber : userData.phoneNumber,
      dob : userData.dob,
      communityName : userData.communityName,
      startDate : userData.startDate
    }
    try {
      const { data } = await axios.put(`${memberUrl}/updatemember`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Builder function
const memberSlices = createSlice({
  name: 'member',
  initialState: {},
  extraReducers: (builder) => {
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
  }


});

export default memberSlices.reducer;
