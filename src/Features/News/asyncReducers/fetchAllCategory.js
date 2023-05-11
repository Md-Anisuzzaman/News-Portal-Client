import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";
export const getAllCategoryApi = async () => {
    const res = await axiosInstance.get('/all-category', {
        headers: {
            authorization: 'Bearer ' + window.localStorage.getItem('token') //the token is a variable which holds the token
        }
    });
    return res.data;
}

export const asyncFetchallCategory = createAsyncThunk('news/fetchAllCategory', async (token) => {
    try {
        const allCategory = await getAllCategoryApi();
        return allCategory;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const fetchAllCategory = (builder) => {
    builder.addCase(asyncFetchallCategory.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncFetchallCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.allCategory = payload.result;
    }).addCase(asyncFetchallCategory.rejected, (state, action) => {
        state.isLoading = false
        state.allCategory = [];
        state.isError = true
        state.error = action.error?.message
    });
}
export default fetchAllCategory;