import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from "../../utils/BaseUrl";

const resetUserAction = createAction("user/reset");

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

export const addNewUserAction = createAsyncThunk(
    "user/addnew",
    async (userData, { rejectWithValue , dispatch}) => {
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
    async (_, { rejectWithValue, getState,dispatch }) => {
        const token = getState().user.userAuth.token;
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

export const fetchUserAction = createAsyncThunk(
    "user/fetchuser",
    async (userId, { rejectWithValue, getState, dispatch }) => {
        const token = getState().user.userAuth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        try {
            const { data } = await axios.get(`${baseUrl}/${userId}`);
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
        userAuth: userLoginFromStorage,
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(registerUserAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.userAuth = action.payload;
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
                state.userAuth = action.payload;
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(addNewUserAction.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addNewUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.userAuth = action.payload;
            })
            .addCase(addNewUserAction.rejected, (state, action) => {
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
                state.userAuth = null;
            })
            .addCase(logoutUserAction.rejected, (state, action) => {
            });
    }
});

export default userSlice.reducer;
