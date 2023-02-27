import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const updateUserApi = async (formData) => {
    const res = await axiosInstance.post(`/updateuser`, formData)
    return res.data;
}

export const asyncUpdateUser = createAsyncThunk('user/updateUser', async (formData) => {
    try {
        const user = await updateUserApi(formData);
        return user;
    } catch (error) {
        console.log("From Update user Async error --> ", error.message);
    }
});

const updateUser = (builder) => {
    builder.addCase(asyncUpdateUser.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncUpdateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload;
    }).addCase(asyncUpdateUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = {};
        state.isError = true
        state.error = action.error?.message
    });
}
export default updateUser;