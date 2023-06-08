import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

export const getTopMovies = createAsyncThunk(
  "topMovies/getTopMovies",
  async () => {
    const responce = await axios.get(`${BASE_URL}/titles`, {
      params: {
        list: "top_rated_250",
        limit: "6",
        sort: "year.decr",
        info: "base_info",
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
  topMovies: [],
  isLoading: false,
};

const topMoviesSlice = createSlice({
  name: "topMovies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTopMovies.fulfilled, (state, action) => {
      state.topMovies = action.payload;
      state.isLoading = false;
    });
  },
});

export default topMoviesSlice.reducer;
