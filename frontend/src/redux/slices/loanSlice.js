import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loanUrl } from '../../utils/BaseUrl';

export const addLoanAction = createAsyncThunk(
    "loan/add",
    async(loanData , {rejectWithValue}) =>{
        try {
            const {data} = await axios.post(`${loanUrl}/add`);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getAllLoanAction = createAsyncThunk(
    "loan/getAll",
    async(loanData , {rejectWithValue}) =>{
        try {
            const {data} = await axios.get(`${loanUrl}/getAll`);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const loanSlice = createSlice({
    name : "loanSlice",
    initialState : {
        loans: [], 
        loading: false, 
        error: null 
    },
    reducers: {},
    extraReducers : (builder)=>{
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
    }
});

export default loanSlice.reducer;
