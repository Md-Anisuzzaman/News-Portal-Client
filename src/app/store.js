import { configureStore } from "@reduxjs/toolkit";
import UserStore from "../Features/User/store";
import authSlice from "../Features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    UserStore: UserStore.reducer,
  },
})



