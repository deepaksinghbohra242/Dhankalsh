import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loanUrl } from '../../utils/BaseUrl';

// Async thunk for adding a loan
export const addLoanAction = createAsyncThunk(
    "loan/add",
    async (loanData, { rejectWithValue }) => {
        try {
            console.log("Adding loan: ", loanData);
            const { data } = await axios.post(`${loanUrl}/add`, loanData);
            return data;
        } catch (error) {
            console.error("Error adding loan: ", error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk for fetching all loans for a specific community
export const getAllLoanAction = createAsyncThunk(
    "loan/getAll",
    async (communityName, { rejectWithValue }) => {
        console.log("Fetching loans for community: ", communityName);
        try {
            const { data } = await axios.get(`${loanUrl}/getByCommunity`, { params: { communityName } });
            return data;
        } catch (error) {
            console.error("Error fetching loans: ", error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk for fetching total loan amount for a specific community
export const getTotalLoanAmount = createAsyncThunk(
    "loan/totalAmount",
    async (communityName, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${loanUrl}/totalLoanAmount`, { params: { communityName } });
            return data;
        } catch (error) {
            console.error("Error fetching total loan amount: ", error.message);
            return rejectWithValue(error.message);
        }
    }
);

const loanSlice = createSlice({
    name: "loanSlice",
    initialState: {
        loans: [],
        totalLoanAmount: 0, // State for total loan amount
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add loan cases
        builder.addCase(addLoanAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addLoanAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.loans.push(action.payload);
        });
        builder.addCase(addLoanAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Get all loans cases
        builder.addCase(getAllLoanAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllLoanAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.loans = action.payload;
        });
        builder.addCase(getAllLoanAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Get total loan amount cases
        builder.addCase(getTotalLoanAmount.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getTotalLoanAmount.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.totalLoanAmount = action.payload;
        });
        builder.addCase(getTotalLoanAmount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default loanSlice.reducer;
