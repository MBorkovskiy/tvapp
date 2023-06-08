import { createSlice } from "@reduxjs/toolkit";
import { MovieProps } from "../types/types";

interface InitialStateProps {
  wishlist: MovieProps[];
}

const initialState: InitialStateProps = {
  wishlist: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishList: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    deleteItemFromWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const { addItemToWishList, deleteItemFromWishList } =
  wishListSlice.actions;
export default wishListSlice.reducer;
