import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OtherProps, ParamsIdProps } from "../types/types";

interface InitialStateProps {
  other: OtherProps;
  isLoading: boolean;
}

export const getOther = createAsyncThunk<OtherProps, ParamsIdProps>(
  "other/getOther",
  async ({ id }) => {
    const responce = await axios.get("https://mdblist.p.rapidapi.com/", {
      params: { i: id },
      headers: {
        "X-RapidAPI-Key": "2628a09bdemsh8d5626a6e6592a6p1c38d5jsnab3a9f344e6c",
        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
      },
    });
    return responce.data;
  }
);

const initialState: InitialStateProps = {
  other: {},
  isLoading: false,
};

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOther.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOther.fulfilled, (state, action) => {
      state.other = action.payload;
      state.isLoading = false;
    });
  },
});

export default otherSlice.reducer;
