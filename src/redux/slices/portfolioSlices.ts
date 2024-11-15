import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PortfolioUserService from "../api/apiPortfolio";
import { TUserData } from "../../types/usersType";

// Define the async thunk to fetch the portfolio data
export const fetchPortfolio = createAsyncThunk<TUserData, void>(
  "portfolio/fetchPortfolio",
  async () => {
    const response = await PortfolioUserService.getPortfolio();
    return response as TUserData;
  }
);

// Define the initial state based on localStorage or default to null
const loadUserInfo = localStorage.getItem("userInfo");

const initialState = {
  isGettingUserInfo: false,
  userInfo: loadUserInfo ? JSON.parse(loadUserInfo) : null,
  isUserError: null as string | null,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.isGettingUserInfo = true;
        state.isUserError = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.isGettingUserInfo = false;
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.isGettingUserInfo = false;
        state.isUserError = action.error.message ?? "Failed to fetch portfolio";
      });
  },
});

export default portfolioSlice.reducer;
