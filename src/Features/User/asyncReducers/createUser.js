import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi } from "../userApi";

export const asyncCreateUser = createAsyncThunk('user/createUser', async (formData) => {
    try {
        const users = await createUserApi(formData);
        return users;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const createUser = (builder) => {
    builder.addCase(asyncCreateUser.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncCreateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload;
    }).addCase(asyncCreateUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
    });


}
export default createUser;