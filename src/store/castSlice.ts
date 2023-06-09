import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";
import { CastProps, ParamsIdProps } from "../types/types";

interface InitialStateProps {
  cast: CastProps[];
  isLoading: boolean;
}

export const getCast = createAsyncThunk<CastProps[], ParamsIdProps>(
  "cast/getCast",
  async ({ id }) => {
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
  }
);

const initialState: InitialStateProps = {
  cast: [],
  isLoading: false,
};

const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {},
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
