import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

export const getMostPopularSeries = createAsyncThunk(
  "mostPopularSeries/getMostPopularSeries",
  async ({ mostPop, pageNumber, start, end, sortYear }) => {
    const responce = await axios.get(`${BASE_URL}/titles`, {
      params: {
        limit: "8",
        list: mostPop,
        sort: sortYear,
        page: pageNumber,
        info: "base_info",

        startYear: start,
        endYear: end,
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return responce.data.results;
  }
);

const initialState = {
  mostPopularSeries: [],
  isLoading: false,
};

const mostPopularSeriesSlice = createSlice({
  name: "mostPopularSeries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMostPopularSeries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMostPopularSeries.fulfilled, (state, action) => {
      state.mostPopularSeries = action.payload;
      state.isLoading = false;
    });
  },
});

export default mostPopularSeriesSlice.reducer;
