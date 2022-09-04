import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    userIsVisible: false,
    userSignUpIsVisible: false,
    notification: null,
  },
  reducers: {
    cartToggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    userToggle(state) {
      state.userIsVisible = !state.userIsVisible;
    },
    
    userSignUpToggle(state) {
      const userSignUp = !state.userSignUpIsVisible;
      if (userSignUp) {
        state.userSignUpIsVisible = !state.userSignUpIsVisible;
      } else {
        state.userIsVisible = !state.userIsVisible;
        state.userSignUpIsVisible = !state.userSignUpIsVisible;
      }
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
