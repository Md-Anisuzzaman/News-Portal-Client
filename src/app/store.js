import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/User/usersSlice";
import authSlice from "../Features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    UserStore: userSlice.reducer,
  }
})



