import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfolioExperienceService from "../api/apiExperience";
import { TExperienceData } from "../../types/experienceType";

// Define the async thunk to fetch the portfolio data
export const fetchExperience = createAsyncThunk<TExperienceData, void>(
  "experience/fetchExperience",
  async () => {
    const response = await ProfolioExperienceService.getPortfolio();
    return response as TExperienceData;
  }
);

// Define the initial state based on localStorage or default to null
const loadExperinceInfo = localStorage.getItem("experienceInfo");

const initialState = {
  isGettingExperienceInfo: false,
  experienceInfo: loadExperinceInfo ? JSON.parse(loadExperinceInfo) : null,
  isExperienceError: null as string | null,
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperience.pending, (state) => {
        state.isGettingExperienceInfo = true;
        state.isExperienceError = null;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.isGettingExperienceInfo = false;
        state.experienceInfo = action.payload;
        state.isExperienceError = null;
        localStorage.setItem("experienceInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.isGettingExperienceInfo = false;
        state.isExperienceError = action.error.message ?? "Failed to fetch experience";
      });
  },
});

export default experienceSlice.reducer;
