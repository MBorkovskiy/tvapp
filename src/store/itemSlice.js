import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";

export const getItem = createAsyncThunk("item/getItem", async (id) => {
  const responce = await axios.get(`${BASE_URL}/titles/${id}`, {
    params: { info: "base_info" },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  });
  return responce.data.results;
});

const initialState = {
  item: [],
  isLoading: false,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getItem.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
  },
});

export default itemSlice.reducer;
