import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGifts = createAsyncThunk("gifts/fetchGifts", () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));
});

export const fetchGiftsRequest = {
  [fetchGifts.pending]: (state, action) => {
    state.status = "loading";
  },
  [fetchGifts.fulfilled]: (state, action) => {
    state.status = "succeeded";
    action.payload.map((product) => state.products.push(product));
  },
  [fetchGifts.rejected]: (state, action) => {
    state.status = "failed";
    state.error = "Request failed";
  },
};

export default fetchGiftsRequest;
