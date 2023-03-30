import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const getNewsApi = async (id) => {
    const res = await axiosInstance.get(`/getCategory/${id}`, {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    });
    return res.data;
}

export const asyncFetchNews = createAsyncThunk('user/fetchNews', async (id) => {
    try {
        const data = await getNewsApi(id);
        return data.result;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchUser = (builder) => {
    builder.addCase(asyncFetchNews.pending, (state) => {
        state.isLoading = true;
        state.news = null;
    }).addCase(asyncFetchNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.news = payload;
        console.log("ffff",state.news);
    }).addCase(asyncFetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.news = {};
        state.isError = true;
        state.error = action.error?.message
    })
}
export default fetchUser;