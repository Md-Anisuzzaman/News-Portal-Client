import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../userApi";


export const asyncFetchUser = createAsyncThunk('user/fetchUser', async (id) => {
    try {
        const data = await getUserApi(id);
        return data.result;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchUser = (builder) => {
    builder.addCase(asyncFetchUser.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
    }).addCase(asyncFetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.isError = true;
        state.error = action.error?.message
    })
}
export default fetchUser;