import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfolioEducationService from "../api/apiEducation"
import { TEducationData } from "../../types/educationType"

// Define the async thunk to fetch the portfolio data
export const fetchEducation = createAsyncThunk<TEducationData, void>(
  "education/fetchEducation",
  async () => {
    const response = await ProfolioEducationService.getPortfolio();
    return response as TEducationData;
  }
);

// Define the initial state based on localStorage or default to null
const loadEducationInfo = localStorage.getItem("educationInfo");

const initialState = {
  isGettingEducationInfo: false,
  educationInfo: loadEducationInfo ? JSON.parse(loadEducationInfo) : null,
  isEducationError: null as string | null,
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.isGettingEducationInfo = true;
        state.isEducationError = null;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.isGettingEducationInfo = false;
        state.educationInfo = action.payload;
        state.isEducationError = null;
        localStorage.setItem("educationInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.isGettingEducationInfo = false;
        state.isEducationError = action.error.message ?? "Failed to fetch education";
      });
  },
});

export default educationSlice.reducer;
