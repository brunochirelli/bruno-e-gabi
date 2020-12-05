import { createSlice } from "@reduxjs/toolkit";
import fetchGiftsRequest from "./fetchGifts";

const initialState = {
  products: [],
};

const giftsSlice = createSlice({
  name: "gifts",
  initialState,
  reducer: {},
  extraReducers: {
    ...fetchGiftsRequest,
  },
});

export const { fetchProducts } = giftsSlice.actions;

export default giftsSlice.reducer;
