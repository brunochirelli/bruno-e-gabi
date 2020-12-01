import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";

export const processCart = createAsyncThunk("cart/processCart", (cart) => {
  // Prepare variables
  const id = nanoid();
  const productsId = cart.products.map((product) => ({ id: product.id }));
  const json = JSON.stringify(cart);
  const total = cart.total;

  // Prepare request
  const args = { total, productsId, id, json };
  const query = gql`
    mutation CreateNewOrder(
      $total: Int
      $id: String
      $products: [ProductWhereUniqueInput!]
      $json: Json
    ) {
      createOrder(
        data: {
          cartJson: $json
          total: $total
          orderId: $id
          processed: false
          products: { connect: $productsId }
        }
      ) {
        id
        orderId
        products {
          productName
        }
        processed
        cartJson
      }
    }
  `;

  // Request
  request(process.env.REACT_APP_API_ENDPOINT, query, args).catch((err) =>
    console.error(err)
  );
});

export const processCartRequest = {
  [processCart.pending]: (state) => {
    state.status = "loading...";
    state.loading = true;
  },
  [processCart.fulfilled]: (state) => {
    state.status = "succeeded";
    state.loading = false;
    state.orderPlaced = true;
  },
  [processCart.rejected]: (state, action) => {
    state.status = "failure";
    state.error = action.payload.message;
    state.loading = false;
  },
};
