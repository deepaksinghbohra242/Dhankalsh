import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from "../../utils/BaseUrl";

export const registerUserAction = createAsyncThunk(
    "user/register",
    async (userData, { rejectWithValue }) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        try {
            const { data } = await axios.post(
                `${baseUrl}/register/admin`,
                userData,
                config
            );
            localStorage.setItem("userInfo", JSON.stringify(data));
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const loginUserAction = createAsyncThunk(
    "user/login",
    async (userData, { rejectWithValue }) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const { data } = await axios.post(
                `${baseUrl}/login`,
                userData,
                config
            );
            localStorage.setItem("userData", JSON.stringify(data));
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const addNewMemberAction = createAsyncThunk(
    "user/addnew",
    async (userData, { rejectWithValue }) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const { data } = await axios.post(
                `${baseUrl}/register/addnew`,
                userData,
                config
            );
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);
export const fetchUsersByCommunityNameAction = createAsyncThunk(
    "user/fetchUsersByCommunityName",
    async (_, { rejectWithValue, getState }) => {
        const token = getState().member.memberAuth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data } = await axios.get(`${baseUrl}/allusers`, config);
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);



export const logoutUserAction = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem("userData");
            return true;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

const userLoginFromStorage = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null;

const userSlice = createSlice({
    name: 'user',
    initialState: {
        memberAuth: userLoginFromStorage,
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(registerUserAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.memberAuth = action.payload;
            })
            .addCase(registerUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(loginUserAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.memberAuth = action.payload;
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(addNewMemberAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addNewMemberAction.fulfilled, (state, action) => {
                state.loading = false;
                state.memberAuth = action.payload;
            })
            .addCase(addNewMemberAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder.addCase(fetchUsersByCommunityNameAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchUsersByCommunityNameAction.fulfilled, (state, action) => {
                state.loading = false;
                state.usersData = action.payload;
            })
            .addCase(fetchUsersByCommunityNameAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(logoutUserAction.pending, (state, action) => {
            })
            .addCase(logoutUserAction.fulfilled, (state, action) => {
                state.memberAuth = null;
            })
            .addCase(logoutUserAction.rejected, (state, action) => {
            });
    }
});

export default userSlice.reducer;
