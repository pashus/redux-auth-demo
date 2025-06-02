import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import type { IAuthState, ILoginResponse, IUserData } from "../types/types";

export const registerUser = createAsyncThunk<ILoginResponse, IUserData>(
  "auth/registerUser",
  async (userData: IUserData, { rejectWithValue }) => {
    try {
      const response = await api.post("/registration", userData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Unknown error"
      );
    }
  }
);

export const loginUser = createAsyncThunk<ILoginResponse, IUserData>(
  "auth/loginUser",
  async (userData: IUserData, { rejectWithValue }) => {
    try {
      const response = await api.post<ILoginResponse>("/login", userData);
      localStorage.setItem("token", response.data.accessToken);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || err.message || "Unknown error"
      );
    }
  }
);

const initialState: IAuthState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    getLoading: (state) => {
      return state.loading;
    },
    getIsAuth: (state) => {
      return state.isAuth;
    },
  },
});

export const { logout } = authSlice.actions;
export const { getLoading, getIsAuth } = authSlice.selectors;
export default authSlice.reducer;
