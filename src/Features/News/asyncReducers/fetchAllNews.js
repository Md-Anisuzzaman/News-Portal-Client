import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";
export const getAllNewsApi = async () => {
    const res = await axiosInstance.get('/all-category', {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    });
    return res.data;
}

export const asyncFetchAllNews = createAsyncThunk('news/fetchAllNews', async (token) => {
    try {
        const allNews = await getAllNewsApi();
        return allNews;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchAllNews = (builder) => {
    builder.addCase(asyncFetchAllNews.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchAllNews.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.allNews = payload.result;
        console.log("kkkk", state.allNews );
    }).addCase(asyncFetchAllNews.rejected, (state, action) => {
        state.isLoading = false
        state.allNews = [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchAllNews;