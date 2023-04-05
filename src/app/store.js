import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/User/usersSlice";
import authSlice from "../Features/Auth/authSlice";
import news_Slice from "../Features/News/news_Slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    UserStore: userSlice.reducer,
    newsStore: news_Slice.reducer,
  }
})


   
