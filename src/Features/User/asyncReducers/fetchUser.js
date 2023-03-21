import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const getUserApi = async (id) => {
    const res = await axiosInstance.get(`/user/${id}`, {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    });
    return res.data;
}

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
        state.user = null;
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