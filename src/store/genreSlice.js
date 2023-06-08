import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

export const getGenre = createAsyncThunk(
  "genre/getGenre",
  async ({ setGenre, mostPop, pageNumber, start, end, sortYear }) => {
    const responce = await axios.get(`${BASE_URL}/titles`, {
      params: {
        genre: setGenre,
        list: mostPop,
        sort: sortYear,
        page: pageNumber,
        info: "base_info",
        limit: "8",
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
  genre: [],
  isLoading: false,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenre.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGenre.fulfilled, (state, action) => {
      state.genre = action.payload;
      state.isLoading = false;
    });
  },
});

export default genreSlice.reducer;
