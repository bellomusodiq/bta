import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface AuthState {
  user: any;
  loading: boolean;
  error: any;
  dashboardData: any;
  userCountry: string;
  baseUrl: string;
  priceChanges?: any;
}

const initialState: AuthState = {
  user: {},
  loading: false,
  error: null,
  dashboardData: {},
  userCountry: "",
  baseUrl: "",
  priceChanges: null,
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
    setUserCountry: (state, action: PayloadAction<any>) => {
      state.userCountry = action.payload;
    },
    setBaseUrl: (state, action: PayloadAction<any>) => {
      state.baseUrl = action.payload;
    },
    setPriceChanges: (state, action: PayloadAction<any>) => {
      state.priceChanges = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setUser,
  setDashboardData,
  setUserCountry,
  setBaseUrl,
  setPriceChanges,
} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
