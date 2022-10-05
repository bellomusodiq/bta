import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface AuthState {
  user: any;
  loading: boolean;
  error: any;
  dashboardData: any;
}

const initialState: AuthState = {
  user: {},
  loading: false,
  error: null,
  dashboardData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setDashboardData: (state, action: PayloadAction<any>) => {
      state.dashboardData = action.payload;
    },
  },
});

export const { setLoading, setError, setUser, setDashboardData } =
  authSlice.actions;

export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
