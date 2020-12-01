import { createSlice } from "@reduxjs/toolkit";
import { processCartRequest } from "./processCart";

const initialState = {
  products: [],
  total: 0,
  orderPlaced: false,
  status: "idle",
  error: null,
};

const updateTotal = (state) => {
  if (state.products.length) {
    state.total = state.products
      .map((e) => e.price * e.quantity)
      .reduce((acc, inc) => acc + inc, null);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGift: {
      prepare: (product) => {
        return { payload: { ...product, quantity: 1 } };
      },
      reducer: (state, action) => {
        const { id } = action.payload;
        const exists = state.products.find((product) => product.id === id);

        // When click buy, check if the product already exists
        // to handle quantity
        if (exists) {
          exists.quantity += 1;
        } else {
          state.products.push(action.payload);
        }

        updateTotal(state);
      },
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const actualProduct = state.products.find((product) => product.id === id);

      // Remove item if quantity is 0
      if (actualProduct.quantity - 1 <= 0 && type !== "increment") {
        state.products = state.products.filter((product) => product.id !== id);
        return;
      }

      if (type === "increment") {
        actualProduct.quantity += 1;
      } else {
        actualProduct.quantity -= 1;
      }

      updateTotal(state);
    },
    removeGift: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
  extraReducers: {
    ...processCartRequest,
  },
});

export const { addGift, updateQuantity, removeGift } = cartSlice.actions;

export default cartSlice.reducer;
