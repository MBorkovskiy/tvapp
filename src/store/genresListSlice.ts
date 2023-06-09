import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

interface InitialStateProps {
  genresList: string[];
  isLoading: boolean;
}

export const getGenresList = createAsyncThunk<string[]>(
  "genresList/getGenresList",
  async () => {
    const responce = await axios.get(`${BASE_URL}/titles/utils/genres`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return responce.data.results;
  }
);

const initialState: InitialStateProps = {
  genresList: [],
  isLoading: false,
};

const genresListSlice = createSlice({
  name: "genresList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenresList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGenresList.fulfilled, (state, action) => {
      state.genresList = action.payload;
      state.isLoading = false;
    });
  },
});

export default genresListSlice.reducer;
