import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loadUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("loadUserFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

export default userReducer;
