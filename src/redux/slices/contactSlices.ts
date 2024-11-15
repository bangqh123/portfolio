import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfolioContactService from "../api/apiContact"
import { TContactData } from "../../types/contactsType";

// Define the async thunk to fetch the portfolio data
export const fetchContact = createAsyncThunk<TContactData, void>(
  "contact/fetchContact",
  async () => {
    const response = await ProfolioContactService.getPortfolio();
    return response as TContactData;
  }
);

// Define the initial state based on localStorage or default to null
const loadContactInfo = localStorage.getItem("contactInfo");

const initialState = {
  isGettingContactInfo: false,
  contactInfo: loadContactInfo ? JSON.parse(loadContactInfo) : null,
  isContactError: null as string | null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.isGettingContactInfo = true;
        state.isContactError = null;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isGettingContactInfo = false;
        state.contactInfo = action.payload;
        state.isContactError = null;
        localStorage.setItem("contactInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.isGettingContactInfo = false;
        state.isContactError = action.error.message ?? "Failed to fetch contact";
      });
  },
});

export default contactSlice.reducer;
