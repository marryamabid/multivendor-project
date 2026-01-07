import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("createProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("createProductSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("createProductFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
export default productReducer;
