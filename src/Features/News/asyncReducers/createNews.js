import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const createNewsApi = async (formData) => {
    const res = await axiosInstance.post('/createnews', formData, {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    })
    console.log("paisi");
    return res.data;
}

export const asyncCreateNews = createAsyncThunk('news/createNews', async (formData) => {
    try {
        const news = await createNewsApi(formData);
        console.log(news);
        return news;
    } catch (error) {
        throw new Error(error);
    }
});

const createNews = (builder) => {
    builder.addCase(asyncCreateNews.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncCreateNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.news = payload.result;
        console.log(state.news);
    }).addCase(asyncCreateNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
    });
}
export default createNews;