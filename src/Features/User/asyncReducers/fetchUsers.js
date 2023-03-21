import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";
export const getUsersApi = async () => {
    const res = await axiosInstance.get('/allusers', {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    });
    return res.data;
}
export const asyncFetchUsers = createAsyncThunk('user/fetchUsers', async (token) => {
    try {
        const users = await getUsersApi();
        return users;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchUsers = (builder) => {
    builder.addCase(asyncFetchUsers.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.users = payload;
    }).addCase(asyncFetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.users = [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchUsers;