import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { BASE_URL } from "../api/api";
import type { IAuthState, ILoginResponse, IUserData } from "../types/types";
import axios from "axios";

export const registerUser = createAsyncThunk<ILoginResponse, IUserData>(
  "auth/registerUser",
  async (userData: IUserData, { rejectWithValue }) => {
    try {
      const response = await api.post("/registration", userData);

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Неизвестная ошибка");
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
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const checkAuth = createAsyncThunk<ILoginResponse>(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ILoginResponse>(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

const initialState: IAuthState = {
  user: null,
  isAuth: false,
  isAuthChecked: false,
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
      state.isAuthChecked = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
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
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.isAuth = true;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(checkAuth.pending, (state) => {
        state.isAuth = false;
        state.isAuthChecked = false;
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.isAuth = true;
        state.isAuthChecked = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isAuth = false;
        state.isAuthChecked = false;
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
    getIsAuthChecked: (state) => {
      return state.isAuthChecked;
    },
    getUser: (state) => {
      return state.user;
    },
    getError: (state) => {
      return state.error;
    },
  },
});

export const { logout } = authSlice.actions;
export const { getLoading, getIsAuth, getIsAuthChecked, getUser, getError } =
  authSlice.selectors;
export default authSlice.reducer;
