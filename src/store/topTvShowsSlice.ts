import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";
import { MovieProps } from "../types/types";

interface InitialStateProps {
  topTvShows: MovieProps[];
  isLoading: boolean;
}

export const getTopTvShows = createAsyncThunk<MovieProps[]>(
  "topTvShows/getTopTvShows",
  async () => {
    const responce = await axios.get(`${BASE_URL}/titles`, {
      params: {
        list: "top_rated_series_250",
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

const initialState: InitialStateProps = {
  topTvShows: [],
  isLoading: false,
};

const topTvShowsSlice = createSlice({
  name: "topTvShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopTvShows.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTopTvShows.fulfilled, (state, action) => {
      state.topTvShows = action.payload;
      state.isLoading = false;
    });
  },
});

export default topTvShowsSlice.reducer;
