import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { memberUrl } from '../../utils/BaseUrl';

// Actions
const resetMemberAction = createAction('member/reset');

export const addNewMemberAction = createAsyncThunk(
  'member/add',
  async(userData ,{rejectWithValue}) =>{
    console.log(userData);
    try {
      const memberData = {
        fullName : userData.fullName,
        userId : userData.id ,
        communityName : userData.communityName
      }
      const {data} = await axios.post(`${memberUrl}/add`, memberData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
)

export const updateMemberAction = createAsyncThunk(
  'member/update',
  async (userData, { rejectWithValue, getState }) => {
    try {
      const memberData = {
        fullName: userData.fullName,
        userId: userData.id,
        communityName: userData.communityName,
        motherName: userData.motherName,
        fatherName: userData.fatherName,
        dob: userData.dob,
        profession: userData.profession,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
        startDate: userData.startDate
      };
      const { data } = await axios.put(`${memberUrl}/updatemember`, memberData);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const getMemberAction = createAsyncThunk(
  "member/getMember",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${memberUrl}/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
)

// Builder function
const memberSlices = createSlice({
  name: 'member',
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewMemberAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewMemberAction.fulfilled, (state, action) => {
        state.loading = false;
        state.member = action.payload;
      })
      .addCase(addNewMemberAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateMemberAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMemberAction.fulfilled, (state, action) => {
        state.loading = false;
        state.member = action.payload;
      })
      .addCase(updateMemberAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMemberAction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMemberAction.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(getMemberAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default memberSlices.reducer;
