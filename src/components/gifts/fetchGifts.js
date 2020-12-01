import { createAsyncThunk } from "@reduxjs/toolkit";
import request, { gql } from "graphql-request";

export const fetchGifts = createAsyncThunk("gifts/fetchGifts", () => {
  return request(
    process.env.REACT_APP_API_ENDPOINT,
    gql`
      query GetAllProducts {
        products {
          id
          productName
          price
          addManyTimes
          productImage {
            url
          }
        }
      }
    `
  )
    .then((res) => res.products)
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
