import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "../constants/url";
import { MovieProps } from "../types/types";

interface InitialStateProps {
  boxOfficeAllTime: MovieProps[];
  isLoadingBoxOfficeAllTime: boolean;
}

export const getBoxOfficeAllTime = createAsyncThunk<MovieProps[]>(
  "boxOfficeAllTimeSlice/getBoxOfficeAllTime",
  async () => {
    const responce = await axios.get(`${BASE_URL}/titles`, {
      params: {
        list: "top_boxoffice_200",
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
  boxOfficeAllTime: [],
  isLoadingBoxOfficeAllTime: false,
};

const boxOfficeAllTimeSlice = createSlice({
  name: "boxOfficeAllTime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoxOfficeAllTime.pending, (state, action) => {
      state.isLoadingBoxOfficeAllTime = true;
    });
    builder.addCase(getBoxOfficeAllTime.fulfilled, (state, action) => {
      state.boxOfficeAllTime = action.payload;
      state.isLoadingBoxOfficeAllTime = false;
    });
  },
});

export default boxOfficeAllTimeSlice.reducer;
