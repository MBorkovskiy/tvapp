import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";
import { MovieProps, ParamsIdProps } from "../types/types";

interface InitialStateProps {
  search: MovieProps[];
  isLoading: boolean;
}

export const getSearch = createAsyncThunk<MovieProps[], ParamsIdProps>(
  "search/searchSlice",
  async ({ id }) => {
    const responce = await axios.get(`${BASE_URL}/titles/search/title/${id}`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return responce.data.results;
  }
);

const initialState: InitialStateProps = {
  search: [],
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.search = action.payload;
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
