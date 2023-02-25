import { configureStore } from "@reduxjs/toolkit";
// import getUserReducer from "../Features/User/getUser";
// import createUserReducer from "../Features/User/createUser";
// import editUserReducer from "../Features/User/editUser";
import UserStore from "../Features/User/store";

export const store = configureStore({
  reducer: {
    // users: getUserReducer,
    // creat: createUserReducer,
    // edit: editUserReducer
    UserStore: UserStore.reducer,
  },
})