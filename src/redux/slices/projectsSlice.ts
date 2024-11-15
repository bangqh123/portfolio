import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectsUserService from "../api/apiProjects"
import { TProjectData } from "../../types/projectsType";

// Define the async thunk to fetch the projects data
export const fetchProjects = createAsyncThunk<TProjectData, void>(
  "projects/fetchProjects",
  async () => {
    const response = await ProjectsUserService.getPortfolio();
    return response as TProjectData;
  }
);

// Define the initial state based on localStorage or default to null
const loadProjectInfo = localStorage.getItem("projectInfo");

const initialState = {
  isGettingProjectInfo: false,
  projectInfo: loadProjectInfo ? JSON.parse(loadProjectInfo) : null,
  isProjectError: null as string | null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isGettingProjectInfo = true;
        state.isProjectError = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isGettingProjectInfo = false;
        state.projectInfo = action.payload;
        state.isProjectError = null;
        localStorage.setItem("projectInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isGettingProjectInfo = false;
        state.isProjectError = action.error.message ?? "Failed to fetch portfolio";
      });
  },
});

export default projectSlice.reducer;
