import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

export const getCast = createAsyncThunk("cast/getCast", async (id) => {
  const responce = await axios.get(`${BASE_URL}/titles/${id}`, {
    params: {
      info: "extendedCast",
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  });
  return responce.data.results.cast.edges;
});

const initialState = {
  cast: [],
  isLoading: false,
};

const castSlice = createSlice({
  name: "cast",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCast.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCast.fulfilled, (state, action) => {
      state.cast = action.payload;
      state.isLoading = false;
    });
  },
});

export default castSlice.reducer;
