import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(" getAllOrdersUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase(" getAllOrdersUserSuccess", (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase(" getAllOrderUsersFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getAllOrdersShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllOrdersShopSuccess", (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase("getAllOrdersShopFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("getAllAdminOrdersRequest", (state) => {
      state.adminOrderLoading = true;
    })
    .addCase("getAllAdminOrdersSuccess", (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    })
    .addCase("getAllAdminOrdersFailure", (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrderError = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
