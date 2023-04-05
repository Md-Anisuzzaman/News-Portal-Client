import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const updateNewsApi = async (formData) => {
    const res = await axiosInstance.post(`/updatenews`, formData, {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        },
    })
    return res.data;
}

export const asyncUpdateNews = createAsyncThunk('user/updateNews', async (formData) => {
    try {
        const user = await updateNewsApi(formData);
        return user;
    } catch (error) {
        console.log("From Update news Async error --> ", error.message);
    }
});

const updateNews = (builder) => {
    builder.addCase(asyncUpdateNews.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncUpdateNews.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.news = payload;
    }).addCase(asyncUpdateNews.rejected, (state, action) => {
        state.isLoading = false
        state.news = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default updateNews;