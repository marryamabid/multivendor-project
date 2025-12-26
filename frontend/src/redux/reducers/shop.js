import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSellerLoading: true,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loadShopRequest", (state) => {
      state.isSellerLoading = true;
    })
    .addCase("loadShopSuccess", (state, action) => {
      state.isSellerLoading = false;
      state.isSeller = true;
      state.shop = action.payload;
    })
    .addCase("loadShopFailure", (state, action) => {
      state.isSellerLoading = false;
      state.isSeller = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

export default shopReducer;
