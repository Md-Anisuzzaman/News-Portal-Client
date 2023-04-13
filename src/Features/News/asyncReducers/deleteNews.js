import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const deleteNewsApi = async (id) => {
   
    const res = await axiosInstance.post(`/deletenews/${id}`, null, {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        },
    });
    return res.data;
}

export const asyncDeleteNews = createAsyncThunk('news/deletenews', async (id) => {
    console.log("hello delete", id);
    try {
        const news = await deleteNewsApi(id);
        return news;
    } catch (error) {
        console.log("Delete user error ", error.message);
    }
});

const deleteNews = (builder) => {
    builder.addCase(asyncDeleteNews.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncDeleteNews.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.news = payload;
    }).addCase(asyncDeleteNews.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
    });
}
export default deleteNews;